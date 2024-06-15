import { CreateVertexClientContextOpts } from '@vertex-protocol/client';

import { ChainEnv } from '../../types';
import sdkConfigLocal from './sdkConfig.localhost.json';
import sdkConfigHarmony from './sdkConfig.harmony.json';

export function getVertexClientOpts(
  chainEnv: ChainEnv,
): CreateVertexClientContextOpts {
  switch (chainEnv) {
    case 'local':
      return sdkConfigLocal.clientContext;
    case 'harmonyMainnet':
    case 'harmonyTestnet':
      return sdkConfigHarmony.clientContext;
    default:
      return chainEnv;
  }
}
