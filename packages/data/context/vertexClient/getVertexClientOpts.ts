import { CreateVertexClientContextOpts } from '@vertex-protocol/client';

import { ChainEnv } from '../../types';
import sdkConfigLocal from './sdkConfig.localhost.json';
import sdkConfigHarmony from './sdkConfig.harmony.json';
import sdkConfigHarmonyTesnet from './sdkConfig.harmony.testnet.json';

export function getVertexClientOpts(
  chainEnv: ChainEnv,
): CreateVertexClientContextOpts {
  switch (chainEnv) {
    case 'local':
      return sdkConfigLocal.clientContext;
    case 'harmonyMainnet':
      return sdkConfigHarmony.clientContext;
    case 'harmonyTestnet':
      return sdkConfigHarmonyTesnet.clientContext;
    default:
      return chainEnv;
  }
}
