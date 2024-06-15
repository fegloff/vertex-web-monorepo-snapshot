import {
  GetIndexerQuotePriceResponse,
  GetIndexerMultiSubaccountSnapshotsResponse,
  GetIndexerMultiSubaccountSnapshotsParams,
  GetIndexerSubaccountMatchEventParams,
  GetIndexerSubaccountMatchEventsResponse,
} from '@vertex-protocol/indexer-client';

import * as contextJson from '../../mock-data/context';

import { parseBigNumber } from '../helper';

export const indexerClient = {
  getQuotePrice: async (): Promise<GetIndexerQuotePriceResponse> => {
    return {
      price: parseBigNumber('0.999969'),
    };
  },
  getMultiSubaccountSnapshots: async (
    params: GetIndexerMultiSubaccountSnapshotsParams,
  ): Promise<GetIndexerMultiSubaccountSnapshotsResponse> => {
    const snapshots =
      contextJson.getMultiSubaccountSnapshots as unknown as GetIndexerMultiSubaccountSnapshotsResponse;
    return snapshots;
  },
  getPaginatedSubaccountMatchEvents: async (
    params: GetIndexerSubaccountMatchEventParams,
  ): Promise<GetIndexerSubaccountMatchEventsResponse> => {
    const matchEvents =
      contextJson.getPaginatedSubaccountMatchEvents as unknown as GetIndexerSubaccountMatchEventsResponse;
    return matchEvents;
  },
};
