import { expect } from "chai";
import { ethers } from "hardhat";

describe("T8", () => {
    describe("Spots array", () => {
        it("name at first spot should be alice", async () => {
            const T8 = await ethers.getContractFactory("T8");
            const contract = await T8.deploy();

            await contract.deployed();

            expect(await contract.getNameAtSpot(0)).to.equal("alice");
        });
    });
});
