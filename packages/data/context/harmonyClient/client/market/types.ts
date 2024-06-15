import { GetAllMarketsResponse } from '@vertex-protocol/contracts';
import {
  GetIndexerMarketSnapshotsParams,
  GetIndexerMarketSnapshotsResponse,
} from '@vertex-protocol/indexer-client';

export interface HarmonyMarket {
  getAllEngineMarkets(): Promise<GetAllMarketsResponse>;
  getMarketSnapshots(
    params: GetIndexerMarketSnapshotsParams,
  ): Promise<GetIndexerMarketSnapshotsResponse>;
}
