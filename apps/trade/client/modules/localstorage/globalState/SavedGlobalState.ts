import { ChainEnv } from '@vertex-protocol/web-data';

export interface SavedGlobalState {
  // Null indicates that the user has not yet made a decision
  areCookiesAccepted: boolean | null;
  lastSelectedChainEnv: ChainEnv | undefined;
}
