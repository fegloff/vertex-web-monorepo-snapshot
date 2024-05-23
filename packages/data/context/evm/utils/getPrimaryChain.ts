import { ChainEnv } from '@vertex-protocol/client';
import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  localhost,
  mantleSepoliaTestnet,
  harmonyOne,
  harmonyTestnet,
} from '@vertex-protocol/web-data';
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
    case 'harmonyOne':
      return harmonyOne;
    case 'harmonyTestnet':
      return harmonyTestnet;
  }
}
