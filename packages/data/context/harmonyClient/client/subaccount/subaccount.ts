import { GetEngineSubaccountSummaryParams } from '@vertex-protocol/engine-client';
import * as subaccountJson from '../../mock-data/subaccount';
import { SubaccountSummaryResponse } from '@vertex-protocol/contracts';
import {
  GetIndexerLinkedSignerParams,
  GetIndexerLinkedSignerResponse,
} from '@vertex-protocol/indexer-client';

const subaccount = {
  getEngineSubaccountSummary: async (
    params: GetEngineSubaccountSummaryParams,
  ): Promise<SubaccountSummaryResponse> => {
    const subaccountSummary =
      subaccountJson.getEngineSubaccountSummary as unknown as SubaccountSummaryResponse;
    return subaccountSummary;
  },
  getSubaccountLinkedSignerWithRateLimit: async (
    params: GetIndexerLinkedSignerParams,
  ): Promise<GetIndexerLinkedSignerResponse> => {
    const {
      subaccount: { subaccountOwner, subaccountName },
    } = params;
    const signerWithRateLimits =
      subaccountJson.getSubaccountLinkedSignerWithRateLimit as unknown as GetIndexerLinkedSignerResponse;
    return signerWithRateLimits;
  },
};

export default subaccount;
