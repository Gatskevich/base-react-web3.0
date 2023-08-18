import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    goelri: {
      url: 'https://eth-goerli.g.alchemy.com/v2/CadRKnQwwqxYXfj_cMgo8aVsGzH5jBno',
      accounts: ['709375970c2bbbc9c59e02400b38c44951ec6955422a1c4dfc77fe4480404f5d'],
    },
  },
};

export default config;
