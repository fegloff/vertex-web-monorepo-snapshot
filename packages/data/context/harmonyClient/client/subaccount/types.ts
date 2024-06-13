import { GetEngineSubaccountSummaryParams } from '@vertex-protocol/engine-client';
import { SubaccountSummaryResponse } from '@vertex-protocol/contracts';
import {
  GetIndexerLinkedSignerParams,
  GetIndexerLinkedSignerResponse,
} from '@vertex-protocol/indexer-client';

export interface HarmonySubaccountAPI {
  getEngineSubaccountSummary(
    params: GetEngineSubaccountSummaryParams,
  ): Promise<SubaccountSummaryResponse>;
  getSubaccountLinkedSignerWithRateLimit(
    params: GetIndexerLinkedSignerParams,
  ): Promise<GetIndexerLinkedSignerResponse>;
}
