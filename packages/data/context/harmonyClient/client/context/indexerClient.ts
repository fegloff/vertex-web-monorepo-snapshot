import {
  GetIndexerQuotePriceResponse,
  GetIndexerMultiSubaccountSnapshotsResponse,
  GetIndexerMultiSubaccountSnapshotsParams,
  GetIndexerSubaccountMatchEventParams,
  GetIndexerSubaccountMatchEventsResponse,
  GetIndexerSubaccountLiquidationEventsParams,
  GetIndexerSubaccountLiquidationEventsResponse,
  GetIndexerEventsParams,
  GetIndexerEventsResponse,
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
    const snapshots = JSON.parse(
      JSON.stringify(contextJson.getMultiSubaccountSnapshots),
    ) as GetIndexerMultiSubaccountSnapshotsResponse;
    return snapshots;
  },
  getPaginatedSubaccountMatchEvents: async (
    params: GetIndexerSubaccountMatchEventParams,
  ): Promise<GetIndexerSubaccountMatchEventsResponse> => {
    const matchEvents = JSON.parse(
      JSON.stringify(contextJson.getPaginatedSubaccountMatchEvents),
    ) as GetIndexerSubaccountMatchEventsResponse;
    return matchEvents;
  },
  getPaginatedSubaccountLiquidationEvents: async (
    params: GetIndexerSubaccountLiquidationEventsParams,
  ): Promise<GetIndexerSubaccountLiquidationEventsResponse> => {
    const liquidationEvents = JSON.parse(
      JSON.stringify(contextJson.getPaginatedSubaccountLiquidationEvents),
    );
    return liquidationEvents;
  },
  getEvents: async (
    params: GetIndexerEventsParams,
  ): Promise<GetIndexerEventsResponse> => {
    const { eventTypes } = params;
    if (eventTypes && eventTypes.includes('deposit_collateral')) {
      return [];
    }
    const events = JSON.parse(
      JSON.stringify(contextJson.getEvents),
    ) as GetIndexerEventsResponse;
    return events;
  },
};
