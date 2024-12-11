import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const DeployXXCModule = buildModule("DeployXXCModule", (m) => {
  const myToken = m.contract("XXC");

  return { myToken };
});

export default DeployXXCModule;