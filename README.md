## A COMMUNITY FUNDING CONTRACT
I created this contract as one(1) of six(6) projects to help boost close community/organizational funding, for the purpose of granting loans to it's members.

One of it's purpose is to be simple, transparent and easy to use.

Community members are assigned the role of Benefactor, and to ensure that everyone is ready to commit to funding as a community they are required to pay a registration
fee that gets stored in the contract.
The community can agree upon an agreed interval for funding(weekly/monthly/yearly) and if a member of the community was in need of funding
they will simply make a request to have a certain amount of funds transferred from the community funds to them. If more than half of the 
community approves of the individuals reason then they get the funds transferred to them by calling the execute function hardcoded.

## Getting Started
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
   iii. Install NPM packages
   ```sh
   npm install
   ```
   iv. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
   
## HardHat Setup
Install dependencies:
```sh
npx add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv
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
  
  Or you can test the functions on a IDE by copy, pasting, and compiling the code on https://Remix.ethereum.org
   
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
Reach me - https://twitter.com/ThatAtlantean - jamaltheatlantean@gmail.com

Project Link: [https://github.com/jamaltheatlantean/community-we-fund](https://github.com/jamaltheatlantean/community-we-fund])
  
