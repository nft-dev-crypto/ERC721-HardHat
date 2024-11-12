import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SmartTokenModule", (m) => {
  // Define the deployment of the MyERC20Token contract
  const myERC20Token = m.contract("SmartTokenModule", []);

  // Optionally, you can add more interactions like calling contract functions post-deployment
  // For example, minting additional tokens or transferring them

  return { myERC20Token };
});