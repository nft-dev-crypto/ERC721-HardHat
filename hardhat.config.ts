require('dotenv').config();
require('@nomicfoundation/hardhat-ignition');
require("@nomicfoundation/hardhat-toolbox");
const { vars, task } = require("hardhat/config");

const { API_URL, PRIVATE_KEY, BASE_SCAN_API_KEY } = process.env;
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

task("accounts", "Prints the list of accounts", async (taskArgs: any, hre: any) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: '0.8.27',
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    // testnet
    "base-sepolia": {
      url: "https://sepolia.base.org",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      "base-sepolia": BASE_SCAN_API_KEY
    },
    customChains: [
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org"
        },
      },
    ]
  },
};

