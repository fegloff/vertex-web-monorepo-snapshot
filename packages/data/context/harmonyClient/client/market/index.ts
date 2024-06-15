import { GetAllMarketsResponse } from '@vertex-protocol/contracts';
import {
  GetIndexerMarketSnapshotsParams,
  GetIndexerMarketSnapshotsResponse,
} from '@vertex-protocol/indexer-client';

import * as marketJson from '../../mock-data/market';

export const market = {
  getAllEngineMarkets: async (): Promise<GetAllMarketsResponse> => {
    const engineMarkets =
      marketJson.getAllEngineMarkets as unknown as GetAllMarketsResponse;
    return engineMarkets;
  },
  getMarketSnapshots: async (
    params: GetIndexerMarketSnapshotsParams,
  ): Promise<GetIndexerMarketSnapshotsResponse> => {
    // const { startCursor, productId, maxTimestampInclusive, limit } = params
    const marketSnapshots =
      marketJson.getMarketSnapshots as unknown as GetIndexerMarketSnapshotsResponse;
    return marketSnapshots;
  },
};
