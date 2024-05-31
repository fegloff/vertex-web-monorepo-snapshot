import { ChainEnv } from '@vertex-protocol/client';
import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  localhost,
  mantleSepoliaTestnet,
  harmonyMainnet,
  harmonyTestnet,
} from './chains';

import { PrimaryChain } from '../../../types';

export function getPrimaryChain(chainEnv: ChainEnv): PrimaryChain {
  switch (chainEnv) {
    case 'local':
      return localhost;
    case 'testnet':
      return arbitrumSepolia;
    case 'mantleTestnet':
      return mantleSepoliaTestnet;
    case 'blastTestnet':
      return blastSepolia;
    case 'mainnet':
      return arbitrum;
    case 'blastMainnet':
      return blast;
    case 'harmonyMainnet':
      return harmonyMainnet;
    case 'harmonyTestnet':
      return harmonyTestnet;
  }
}
