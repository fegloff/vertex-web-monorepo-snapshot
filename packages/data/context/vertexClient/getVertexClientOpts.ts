import {
  ChainEnv,
  CreateVertexClientContextOpts,
} from '@vertex-protocol/client';

import sdkConfigLocal from './sdkConfig.localhost.json';
import sdkConfigHarmony from './sdkConfig.harmony.json';

export function getVertexClientOpts(
  chainEnv: ChainEnv,
): CreateVertexClientContextOpts {
  switch (chainEnv) {
    case 'local':
      return sdkConfigLocal.clientContext;
    case 'harmonyMainnet':
    case 'blastTestnet':
      return sdkConfigHarmony.clientContext;
    default:
      return chainEnv;
  }
}
