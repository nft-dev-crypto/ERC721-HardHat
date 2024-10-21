import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await hre.ethers.getSigners();
        const hardhatToken = await hre.ethers.deployContract("MyToken");

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        console.log("ownerBalance: ", ownerBalance.toString());
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
});