import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const DeployMyTokenModule = buildModule("DeployMyTokenModule", (m) => {
  const myToken = m.contract("MyToken");

  return { myToken };
});

export default DeployMyTokenModule;