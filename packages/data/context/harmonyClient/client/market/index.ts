import { GetAllMarketsResponse } from '@vertex-protocol/contracts';
import {
  GetIndexerMarketSnapshotsParams,
  GetIndexerMarketSnapshotsResponse,
} from '@vertex-protocol/indexer-client';

import { GetEngineHealthGroupsResponse } from '@vertex-protocol/engine-client';

import * as marketJson from '../../mock-data/market';
import { hasBigDecimalType, parseBigNumber } from '../helper';

export const market = {
  getAllEngineMarkets: async (): Promise<GetAllMarketsResponse> => {
    const engineMarkets = JSON.parse(
      JSON.stringify(marketJson.getAllEngineMarkets),
      (key, value) => {
        if (hasBigDecimalType(key)) {
          return parseBigNumber(value);
        }
        return value;
      },
    ) as GetAllMarketsResponse;
    return engineMarkets;
  },
  getMarketSnapshots: async (
    params: GetIndexerMarketSnapshotsParams,
  ): Promise<GetIndexerMarketSnapshotsResponse> => {
    // const { startCursor, productId, maxTimestampInclusive, limit } = params
    const marketSnapshots = JSON.parse(
      JSON.stringify(marketJson.getMarketSnapshots),
    ) as GetIndexerMarketSnapshotsResponse;
    return marketSnapshots;
  },
  getHealthGroups: async (): Promise<GetEngineHealthGroupsResponse> => {
    const healthGroups = JSON.parse(
      JSON.stringify(marketJson.getHealthGroups),
    ) as GetEngineHealthGroupsResponse;
    return healthGroups;
  },
};
