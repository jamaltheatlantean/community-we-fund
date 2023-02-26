const { assert, expect } = require("chai");
const { network, utils, deployments, ethers, getNamedAccounts } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("WeFund", function () {
      let weFund;
      let mockV3Aggregator;
      let deployer;
      const sendValue = ethers.utils.parseEther("1");
      beforeEach(async () => {
        // const accounts = await ethers.getSigners()
        // deployer = accounts[0]
        const deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture(["all"]);
        weFund = await ethers.getContract("WeFund", deployer);
        mockV3Aggregator = await ethers.getContract(
          "MockV3Aggregator",
          deployer
        );
      });

      describe("constructor", function () {
        it("sets the aggregator addresses correctly", async () => {
          const response = await weFund.getPriceFeed();
          assert.equal(response, mockV3Aggregator.address);
        });
      })
      
        describe("createBenefactor", function () {
          it("should add a new benefactor", async () => {
            const name = "Alice"
            const data = "0xabcdef"
            await weFund.createBenefactor(name, data, {value: sendValue})
            const benefactor = await weFund.createBenefactor(name, data, {value: sendValue})
          })
      
          it("should revert if not enough ether sent", async () => {
            const name = "John"
            const data = "0xabcdef"
            await expect(weFund.createBenefactor(name, data)).to.be.revertedWith("not enough ether")
          })
      
          it("should revert if maximum number of benefactors is reached", async () => {
            const name = "Alice"
            const data = "0xabcdef"
            // Set the maximum number of benefactors to 1 for this test
            weFund.maximumNumOfBenefactors = 1
            // First benefactor should be added successfully
            await weFund.createBenefactor(name, data, { value: sendValue })
            // Attempt to add a second benefactor should fail
            await expect(weFund.createBenefactor(name, data, { value: sendValue })).to.be.revertedWith(
              "warning: max number of benefactors reached"
              )
          })
        })
        
      })
