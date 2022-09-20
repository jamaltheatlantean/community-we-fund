## A COMMUNITY FUNDING CONTRACT
I created this contract as one of six projects that i came up with after i was confident enough and ready to start building dApps that'll go on the block-chain.                                                                                                                                                     
I built it to help boost close community/organizational funding, for the purpose of granting loans to it's members so one of it's purpose is to be simple, transparent and easy to use.

Community members are assigned the role of Benefactor, and to ensure that everyone is ready to commit to funding as a community they are required to pay a registration
fee that gets stored in the contract.
The community can agree upon an agreed interval for group funding(weekly/monthly/yearly) and if a member of the community was in need of funding
they will simply make a request to have a certain amount of funds transferred from the community funds to them. If more than half of the 
community approves of the individuals reason then they get the funds transferred to them by calling the execute function hardcoded.                        

## BUILDING THE DAPP

It was fun to build and get creative in creating this dApp by combining a few things i had learned throughout my learning curve, and although i barely had any challenges during the build, i got stuck at the execute function, which is designd to pay the amount of ETH requested for loan. For some reason it wasn't paying the address that had made a request. I had this problem for two days, and no stack overflow wasn't helpful, as i had received more than 25 views yet no response. Maybe i asked the question wrongly, but i wasn't going to let that slow me down, so i turned to a friend and showed him the code. We spent the next three days looking for a solution, and in that time we found the need to implement more logic to the function. Shortly after we found that my original code wasn't processing the amount of approvals needed before ETH could be sent, and he came up with a solution. We got it functioning then cleaned up the code and got it ready to be pushed to github.


## Getting Started on this project
### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
  
  
### Installation
  i. Get a free API Key at https://alchemyapi.io
  
  ii. Clone the repo
   ```sh
   git clone https://github.com/jamaltheatlantean/community-we-fund.git
   ```
   iii. Install npm                                                                                                                                     
    ```
    npm install
    ```
                                                                                                                                                           
   iv. Enter your API in `config.js`
   ```sh
   const API_KEY = 'ENTER YOUR API';
   ```
   
   ## Install Hardhat Dependencies
  ```sh
  npx save --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv
  ```
   
### Deploy on rinkeby testnet
  ```
  npx hardhat deploy --network rinkeby
  ```
  
  You can get some rinkeby faucet by following steps:
  
  i. Go to https://faucets.chain.link/rinkeby                                                                                                               
  ii. Connect your wallet                                                                                                                                   
  iii. Copy and Paste your address.                                                                                                                         
  iv. Pass the Captcha.                                                                                                                                     
  v. Click on send request and wait confirmation.                                                                                                           
  
  Or you can test the functions on an IDE by copy, pasting, and compiling the code on https://Remix.ethereum.org
   
 ## Usage
 
1.) Keep a community registry                                                                                                                               
2.) Boost community savings                                                                                                                                 
3.) Safely store community funds on the block-chain                                                                                                         
4.) Loan ETH to community members in need                                                                                                                    
  
  
## Project Status
This keeps track of the feautures that aren't in the code yet.                                                                                             
*90% complete*
-Finish writing, and commit unit tests.


 ## Contributing

  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag       "enhancement".
  Don't forget to give the project a star! Thanks again!

  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
  3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
  4. Push to the Branch (`git push origin feature/AmazingFeature`)
  5. Open a Pull Request


   
  ## License

  Distributed under the MIT License. See `LICENSE.txt` for more information.
  
  ## Contact

Author - Jamal The Atlantean                                                                                                                           
Reach me on [Twitter](https://twitter.com/ThatAtlantean)
Or send me a mail - jamaltheatlantean@gmail.com

Project Link: [https://github.com/jamaltheatlantean/community-we-fund](https://github.com/jamaltheatlantean/community-we-fund])
  
