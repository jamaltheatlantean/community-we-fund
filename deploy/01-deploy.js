const { getNamedAccounts, deployments, network } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");
//const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  let ethUsdPriceFeedAddress;
  if (developmentChains.includes(network.name)) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }

  log("----------------------------------------------------");
  log("Deploying WeFund and waiting for confirmations...");
  const weFund = await deploy("WeFund", {
    from: deployer,
    args: [ethUsdPriceFeedAddress],
    log: true,
    // we need to wait if on a live network so we can verify properly
    //waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`WeFund deployed at ${weFund.address}`);
};

module.exports.tags = ["all", "wefund"];
