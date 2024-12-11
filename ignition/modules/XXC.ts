import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const DeployMyTokenModule = buildModule("DeployXXCModule", (m) => {
  const myToken = m.contract("XXC");

  return { myToken };
});

export default DeployMyTokenModule;