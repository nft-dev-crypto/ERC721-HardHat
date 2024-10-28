import { expect } from "chai";
import hre from "hardhat";

describe("MyToken Contract", function () {
    let MyToken: any;
    let myToken: any;
    let owner: any;

    beforeEach(async function () {
        MyToken = await hre.ethers.getContractFactory("MyToken");
        [owner] = await hre.ethers.getSigners();
        myToken = await MyToken.deploy();
        // await myToken.deployed();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await myToken.owner()).to.equal(owner.address);
        });

        it("Should have a base URI", async function () {
            const baseURI = await myToken.baseURI();
            expect(baseURI).to.equal("https://amethyst-brilliant-moose-34.mypinata.cloud/ipfs/QmdTQ1ctbRQVjajezPdVrRboscaazhDM13FD4LzTPp6feY/");
        });
    });

    // describe("Minting NFTs", function () {
    //     it("Should mint a new NFT and set its URI", async function () {
    //         const mintTx = await myToken.mintNft({ value: hre.ethers.utils.parseEther("0.01") });
    //         await mintTx.wait();

    //         const tokenId = 0; // The first token ID
    //         const tokenURI = await myToken.tokenURI(tokenId);
    //         expect(tokenURI).to.equal("https://amethyst-brilliant-moose-34.mypinata.cloud/ipfs/QmdTQ1ctbRQVjajezPdVrRboscaazhDM13FD4LzTPp6feY/0.json");
    //     });

    //     it("Should increment the token counter after minting", async function () {
    //         await myToken.mintNft({ value: hre.ethers.utils.parseEther("0.01") });
    //         expect(await myToken.getTokenCounter()).to.equal(1);
    //     });

    //     it("Should revert if non-owner tries to mint", async function () {
    //         await expect(myToken.connect(addr1).mintNft({ value: hre.ethers.utils.parseEther("0.01") })).to.be.revertedWith("Ownable: caller is not the owner");
    //     });
    // });

    // describe("Total Supply", function () {
    //     it("Should return correct total supply", async function () {
    //         await myToken.mintNft({ value: hre.ethers.utils.parseEther("0.01") });
    //         expect(await myToken.totalSupply()).to.equal(1);
    //     });
    // });
});