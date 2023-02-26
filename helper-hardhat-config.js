const networkConfig = {
  31337: {
      name: "localhost",
  },
<<<<<<< HEAD
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  // Default one is ETH/USD contract on Kovan
=======
>>>>>>> c4a8ba59bfb71e14525fe42416f2cce2fa62923e
  5: {
      name: "goerli",
      ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;

module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
};
