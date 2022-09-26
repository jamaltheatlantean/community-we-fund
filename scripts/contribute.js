const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const weFund = await ethers.getContract("WeFund", deployer)
    console.log("funding contract...")
    const transactionResponse = await weFund.contribute({
        value: ethers.utils.parseEther("1"),
    })
    await transactionResponse.wait(1)
    console.log("contributed!")
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    proxess.exit(1)
})
