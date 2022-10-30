import { ethers } from "hardhat";

async function main() {
    const T8 = await ethers.getContractFactory("T8");
    const contract = await T8.deploy();

    await contract.deployed();
    console.log("T8 deployed to: ", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
