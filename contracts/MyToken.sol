pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract MyToken is ERC721 {
    string public constant baseURI =
        "https://moccasin-obedient-possum-800.mypinata.cloud/ipfs/QmVakaGhSLyGSj95mcmQtmot3QGqPAaNdqi59DUFdvwgEu/2.json";
    uint256 private s_tokenCounter;

    // Mapping to store URIs for each token ID

    constructor() ERC721("MyToken", "MTK") {
        s_tokenCounter = 0;
    }

    function mintNft() public returns (uint256) {
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
        return s_tokenCounter;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        // require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return baseURI;
    }

    function totalSupply() public view returns (uint256) {
        return s_tokenCounter;
    }
}
