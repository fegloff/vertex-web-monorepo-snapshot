import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  hardhat,
  localhost,
  mantleSepoliaTestnet,
  harmonyOne,
  harmonyTestnet,
} from '@vertex-protocol/web-data/context/evm/utils';

const PRIMARY_CHAINS = [
  localhost,
  hardhat,
  arbitrum,
  arbitrumSepolia,
  blastSepolia,
  blast,
  mantleSepoliaTestnet,
  harmonyOne,
  harmonyTestnet,
] as const;

export type PrimaryChain = (typeof PRIMARY_CHAINS)[number];

export type PrimaryChainID = PrimaryChain['id'];
