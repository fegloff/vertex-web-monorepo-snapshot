import { ChainEnv } from '@vertex-protocol/web-data';
import { WagmiConfigParams } from './WagmiConfigParams';

export interface EVMContextParams extends WagmiConfigParams {
  supportedChainEnvs: ChainEnv[];
}
