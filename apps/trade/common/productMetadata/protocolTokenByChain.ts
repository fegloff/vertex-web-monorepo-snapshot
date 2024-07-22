import { PrimaryChainID } from '@vertex-protocol/web-data';
import {
  VRTX_ARB_ONE,
  VRTX_ARB_SEPOLIA,
} from 'common/productMetadata/arbitrum/tokens';
import {
  USDB_BLAST,
  USDB_BLAST_SEPOLIA,
} from 'common/productMetadata/blast/tokens';
import { USDC_MANTLE_SEPOLIA } from 'common/productMetadata/mantle/tokens';
import { Token } from 'common/productMetadata/types';
import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  hardhat,
  localhost,
  harmonyMainnet,
  mantleSepoliaTestnet,
  harmonyTestnet,
} from '@vertex-protocol/web-data';
import { USDC_HARMONY, VRTX_HARMONY } from './harmony/tokens';
import { USDC_HARDHAT } from './local/tokens';

export const PROTOCOL_TOKEN_BY_CHAIN: Record<number, Token> = {
  [arbitrum.id]: VRTX_ARB_ONE,
  [arbitrumSepolia.id]: VRTX_ARB_SEPOLIA,
  // No protocol token on blast
  [blastSepolia.id]: USDB_BLAST_SEPOLIA,
  [blast.id]: USDB_BLAST,
  // No protocol token on mantle
  [mantleSepoliaTestnet.id]: USDC_MANTLE_SEPOLIA,
  [hardhat.id]: USDC_HARMONY,
  [localhost.id]: USDC_HARMONY,
  [harmonyMainnet.id]: VRTX_HARMONY, // change to VRTX_HARMONY
  [harmonyTestnet.id]: VRTX_HARMONY, // change to VRTX_HARMONY
} satisfies Record<PrimaryChainID, Token>;

export const PROTOCOL_TOKEN_PRODUCT_ID_BY_CHAIN: Record<number, number> = {
  [arbitrum.id]: 41,
  [arbitrumSepolia.id]: 41,
  // No protocol token on blast
  [blastSepolia.id]: -1,
  [blast.id]: -1,
  // No protocol token on mantle
  [mantleSepoliaTestnet.id]: -1,
  [hardhat.id]: 23,
  [localhost.id]: 23,
  // No protocol token on harmony??
  [harmonyMainnet.id]: 23,
  [harmonyTestnet.id]: 23,
} satisfies Record<PrimaryChainID, number>;
