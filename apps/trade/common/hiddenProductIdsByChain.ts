import { PrimaryChainID } from '@vertex-protocol/web-data';
import { mantleSepoliaTestnet } from '@wagmi/core/chains';
import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  hardhat,
  harmonyOne,
  localhost,
  harmonyTestnet,
} from '@vertex-protocol/web-data';

export const HIDDEN_PRODUCT_IDS_BY_CHAIN: Record<number, Set<number>> = {
  [arbitrum.id]: new Set(),
  [arbitrumSepolia.id]: new Set(),
  [blastSepolia.id]: new Set(),
  [blast.id]: new Set(),
  [mantleSepoliaTestnet.id]: new Set(),
  [hardhat.id]: new Set(),
  [localhost.id]: new Set(),
  [harmonyOne.id]: new Set(),
  [harmonyTestnet.id]: new Set(),
} satisfies Record<PrimaryChainID, Set<number>>;
