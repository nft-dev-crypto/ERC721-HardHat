pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract MyToken is ERC721URIStorage, Ownable {
    string public constant baseURI =
        "https://amethyst-brilliant-moose-34.mypinata.cloud/ipfs/QmdTQ1ctbRQVjajezPdVrRboscaazhDM13FD4LzTPp6feY/";
    uint256 private s_tokenCounter;

    // Mapping to store URIs for each token ID

    constructor() ERC721("MyToken", "MTK") Ownable(msg.sender) {
        s_tokenCounter = 0;
    }

    function mintNft() public payable returns (uint256) {
        uint256 newTokenId = s_tokenCounter;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(
            newTokenId,
            string(abi.encodePacked(baseURI, uint2str(newTokenId), ".json"))
        );
        s_tokenCounter = s_tokenCounter + 1;
        return newTokenId;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function totalSupply() public view returns (uint256) {
        return s_tokenCounter;
    }

    // function withdraw() public onlyOwner {
    //     uint256 balance = address(this).balance;
    //     require(balance > 0, "No funds to withdraw");
    //     payable(owner()).transfer(balance);
    // }
    function uint2str(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = uint8(48 + (_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}
