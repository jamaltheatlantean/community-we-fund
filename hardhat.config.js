require("hardhat-deploy");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: {
    compilers: [{ version: "0.8.12" }, { version: "0.6.6" }],
  },

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    kovan: {
      url: KOVAN_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 42,
      blockConfirmations: 6,
      gas: 6000000,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
      blockConfirmations: 6,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    },
  },
};
