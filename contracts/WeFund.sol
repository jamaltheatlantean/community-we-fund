// SPDX-License-Identifier: MIT
// Pragma
pragma solidity ^0.8.12;
// Imports
import "./PriceConverter.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
// Errors
error WeFund__NotBenefactorError();

// Interfaces, Libraries, Contract
/** @title A contract for close community crowd funding
 * @author Jamal'TheAtlantean
 * @dev The contract implements Price Feeds as a library
 */
contract WeFund {
    using PriceConverter for uint256;

    event BenefactorAdded(address indexed sender, string name);
    event BenefactorContributed(address indexed benefactor, uint amount);
    event RequestSubmited(address indexed benefactor, uint indexed requestId);
    event RequestApproved(address indexed benefactor, uint indexed requestId);
    event RequestExecuted(address indexed benefactor, uint indexed requestId);

    struct Benefactor {
        address addr;
        string name;
        bytes data;
    }

    struct Request {
        string reason;
        uint value;
        address payable to;
        bytes data;
        bool granted;
    }
    
    Benefactor[] private s_benefactors;
    Request[] public requests; // store requests
    
    mapping(address => bool) public s_isBenefactor;
    mapping(address => bool) public s_contributed; // checks if benefactor has contributed

    mapping(uint => mapping(address => bool)) public s_approved;
    mapping(address => uint256) private s_totalAmountContributed;

    address private immutable i_owner;
    uint8 private s_approval;

    uint256 public constant MINIMUM_DONATION = 50 * 1e18; // minimum donation is $50
    uint256 public constant AMOUNT_TO_REGISTER = 5 * 1e18; // amount to register is $5

    uint8 public maximumNumOfBenefactors = 50; // smaller communities are more easily managed

    modifier onlyBenefactor() {
        if (!s_isBenefactor[msg.sender]) {
            revert WeFund__NotBenefactorError();
        _;
    }

    modifier rqExists(uint _requestId) {
        require(_requestId < requests.length, "invalid tx");
        _;
    }

    modifier notApproved(uint _requestId) {
        require(!s_approved[_requestId][msg.sender], "already approved");
        _;
    }

    modifier notExecuted(uint _requestId) {
        require(!requests[_requestId].granted, "rq already executed");
        _;
    }

    AggregatorV3Interface private s_priceFeed;

    constructor(address priceFeed) {
        s_priceFeed = AggregatorV3Interface(priceFeed);
        i_owner = msg.sender;
    }

    receive() external payable {}

    function createBenefactor(string memory _name, bytes calldata _data)
        external
        payable
    {
        require(
            msg.value.getConversionRate(s_priceFeed) >= AMOUNT_TO_REGISTER,
            "not enough ether"
        );
        require(maximumNumOfBenefactors != s_benefactors.length); 
        s_benefactors.push(
            Benefactor({addr: msg.sender, name: _name, data: _data})
        );
        s_isBenefactor[msg.sender] = true;
        emit BenefactorAdded(msg.sender, _name);
    }

    function contribute() external payable onlyBenefactor {
        require(
            msg.value.getConversionRate(s_priceFeed) >= MINIMUM_DONATION,
            "not enough to contribute"
        );
        s_contributed[msg.sender] = true;
        s_totalAmountContributed[msg.sender] += msg.value;

        emit BenefactorContributed(msg.sender, msg.value);
    }

    function submitLoanRequest(
        string memory _reason,
        address payable _to,
        uint _value,
        bytes calldata _data
    ) external onlyBenefactor {
        uint requestId = requests.length;
        requests.push(
            Request({
                reason: _reason,
                to: _to,
                value: _value,
                data: _data,
                granted: false
            })
        );

        emit RequestSubmited(msg.sender, requestId);
    }

    function approveLoanRequest(uint _requestId)
        external
        onlyBenefactor
        rqExists(_requestId)
        notApproved(_requestId)
        notExecuted(_requestId)
    {
        s_approved[_requestId][msg.sender] = true;
        s_approval += 1;

        emit RequestApproved(msg.sender, _requestId);
    }

    function executeLoanRequest(uint _requestId)
        external
        onlyBenefactor
        rqExists(_requestId)
        notExecuted(_requestId)
    {
        require(getRequiredCount() > s_approval, "requires more approvals");
        Request storage request = requests[_requestId];
        request.granted = true;
        require(request.granted, "not granted");
        (bool success, ) = request.to.call{value: request.value}(request.data);
        require(success, "request failed");

        emit RequestExecuted(msg.sender, _requestId);
    }

    function getBenefactors() public view returns (Benefactor[] memory) {
        return s_benefactors;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getTotalAmountContributed(address benefactor)
        public
        view
        returns (uint256)
    {
        return s_totalAmountContributed[benefactor];
    }

    function getRequiredCount() public view returns (uint256) {
        return s_benefactors.length / 2;
    }

    function getPriceFeed() public view returns (AggregatorV3Interface) {
        return s_priceFeed;
    }

    function getOwner() public view returns (address) {
        return i_owner;
    }
}
