// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC20Token is ERC20, Ownable {
    // Define initial supply of the token
    uint256 private constant INITIAL_SUPPLY = 1000000 * (10 ** 18); // 1,000,000 tokens with 18 decimals

    // Address to withdraw funds
    address private myaddress = 0x8e549687Cec0b4E432F6E365491fa766661D62c4;

    constructor() ERC20("MyERC20Token", "MET") Ownable() {
        // Mint the initial supply to the contract owner
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    // Function to mint new tokens, callable only by the owner
    function mintTokens(uint256 amount) external onlyOwner {
        _mint(msg.sender, amount);
    }

    // Function to withdraw Ether from the contract to a predefined address
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds available");
        payable(myaddress).transfer(balance);
    }

    // Fallback function to accept Ether
    receive() external payable {}
}
