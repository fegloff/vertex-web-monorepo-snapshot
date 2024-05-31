import { PrimaryChainID } from '@vertex-protocol/web-data';
import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  hardhat,
  harmonyMainnet,
  localhost,
  mantleSepoliaTestnet,
} from '@vertex-protocol/web-data';
import {
  USDC_ARB_ONE,
  USDC_ARB_SEPOLIA,
} from 'common/productMetadata/arbitrum/tokens';
import {
  USDB_BLAST,
  USDB_BLAST_SEPOLIA,
} from 'common/productMetadata/blast/tokens';
import { USDC_HARDHAT } from 'common/productMetadata/local/tokens';
import { USDC_MANTLE_SEPOLIA } from 'common/productMetadata/mantle/tokens';
import { Token } from 'common/productMetadata/types';
import { USDC_HARMONY } from './harmony/tokens';

export const PRIMARY_QUOTE_TOKEN_BY_CHAIN: Record<number, Token> = {
  [arbitrum.id]: USDC_ARB_ONE,
  [arbitrumSepolia.id]: USDC_ARB_SEPOLIA,
  [blastSepolia.id]: USDB_BLAST_SEPOLIA,
  [blast.id]: USDB_BLAST,
  [mantleSepoliaTestnet.id]: USDC_MANTLE_SEPOLIA,
  [hardhat.id]: USDC_HARDHAT,
  [localhost.id]: USDC_HARDHAT,
  [harmonyMainnet.id]: USDC_HARMONY,
} satisfies Record<PrimaryChainID, Token>;
