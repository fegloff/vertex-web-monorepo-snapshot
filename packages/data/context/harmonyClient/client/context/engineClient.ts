import {
  EngineServerStatusResponse,
  GetEngineTimeResponse,
} from '@vertex-protocol/engine-client';

export const engineClient = {
  getIsBlockedIp: async (): Promise<Boolean> => {
    return false;
  },
  getStatus: async (): Promise<EngineServerStatusResponse> => {
    // "started" | "active" | "stopping" | "syncing" | "live_syncing" | "failed"
    return 'active';
  },
  getTime: async (): Promise<GetEngineTimeResponse> => {
    const now = new Date();
    const utcTimestamp = now.getTime();
    return utcTimestamp;
  },
};
