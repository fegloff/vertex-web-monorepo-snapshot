import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  hardhat,
  localhost,
  mantle,
  mantleSepoliaTestnet,
  harmonyOne,
  optimism,
  polygon,
  sepolia,
  avalanche,
  base,
  bsc,
  fantom,
  mainnet,
} from 'wagmi/chains';
import { Chain } from 'viem';

const harmonyTestnet: Chain = {
  id: 1666700000,
  name: 'Harmony Testnet',
  nativeCurrency: {
    name: 'ONE',
    symbol: 'ONE',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://api.s0.b.hmny.io'],
    },
    public: {
      http: ['https://api.s0.b.hmny.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Harmony Testnet Explorer',
      url: 'https://explorer.testnet.harmony.one',
    },
  },
};

export {
  avalanche,
  base,
  bsc,
  fantom,
  mainnet,
  optimism,
  polygon,
  sepolia,
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  hardhat,
  localhost,
  mantle,
  mantleSepoliaTestnet,
  harmonyOne,
  harmonyTestnet,
};
