const { getNamedAccounts, ethers, network } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");
const { assert, expect } = require("chai");

developmentChains.includes(network.name)
  ? describe.skip
  : describe("WeFund", async function () {
      let weFund;
      let deployer;
      const sendValue = ethers.utils.parseEther("1");
      beforeEach(async function () {
        //
        deployer = (await getNamedAccounts()).deployer;
        weFund = await ethers.getContractAt("WeFund", deployer);
      });

      it("allows people to contribute and request loans", async function () {
        await weFund.contribute({ value: sendValue });
        const endingWeFundBalance = await weFund.provider.getBalance(
          weFund.address
        );
      });
      it("allows people to register as a benefactor", async function () {
        const createBenefactor = await weFund.createBenefactor;
      });
      it("allows benefactor to make a loan request", async function () {
        const submitLoanRequest = await weFund.submitLoanRequest;
      });
      it("allows benefactor to approve loan requests", async function () {
        const approveLoanRequest = await weFund.approveLoanRequest;
      });
      it("allows benefactor to execute loan request after approval", async function () {
        const executeLoanRequest = await weFund.executeLoanRequest;
      });
    });
