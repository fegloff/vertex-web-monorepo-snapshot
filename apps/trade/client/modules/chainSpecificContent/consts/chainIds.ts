import { mantleSepoliaTestnet } from '@wagmi/core/chains';
import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  harmonyOne,
  harmonyTestnet,
} from '@vertex-protocol/web-data';

export const ARB_CHAIN_IDS = [arbitrum.id, arbitrumSepolia.id];

export const MANTLE_CHAIN_IDS = [mantleSepoliaTestnet.id];

export const BLAST_CHAIN_IDS = [blast.id, blastSepolia.id];

export const HARMONY_CHAIN_IDS = [harmonyOne.id, harmonyTestnet.id];
