import { Chain } from 'viem';
import {
  arbitrum,
  arbitrumSepolia,
  mantleSepoliaTestnet,
  blast,
  blastSepolia,
  hardhat,
  localhost,
  mantle,
  harmonyMainnet,
  harmonyTestnet,
} from '../../context/evm/utils';

/**
 * The overarching "type" of the chain - regardless of whether it's testnet or mainnet
 * Ex. Arbitrum Sepolia -> Chain type of arbitrum
 */
export type ChainType = 'arbitrum' | 'mantle' | 'blast' | 'harmony';

const ARB_CHAIN_IDS = new Set<number>([
  arbitrum.id,
  arbitrumSepolia.id,
  localhost.id,
  hardhat.id,
]);

const MANTLE_CHAIN_IDS = new Set<number>([mantle.id, mantleSepoliaTestnet.id]);
const BLAST_CHAIN_IDS = new Set<number>([blast.id, blastSepolia.id]);
const HARMONY_CHAIN_IDS = new Set<number>([
  harmonyMainnet.id,
  harmonyTestnet.id,
]);

export function getChainType(chain: Chain): ChainType {
  if (ARB_CHAIN_IDS.has(chain.id)) {
    return 'arbitrum';
  }
  if (MANTLE_CHAIN_IDS.has(chain.id)) {
    return 'mantle';
  }
  if (BLAST_CHAIN_IDS.has(chain.id)) {
    return 'blast';
  }
  if (HARMONY_CHAIN_IDS.has(chain.id)) {
    return 'harmony';
  }
  throw Error('Unsupported chain type');
}
