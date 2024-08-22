import {
  GetIndexerSubaccountMatchEventParams,
  GetIndexerSubaccountMatchEventsResponse,
  IndexerPaginationParams,
  GetIndexerSubaccountLpEventsResponse,
  GetIndexerSubaccountCollateralEventsParams,
  GetIndexerSubaccountCollateralEventsResponse,
  GetIndexerPaginatedOrdersParams,
  GetIndexerPaginatedOrdersResponse,
  GetIndexerSubaccountSettlementEventsResponse,
  GetIndexerSubaccountLiquidationEventsResponse,
  GetIndexerSubaccountInterestFundingPaymentsParams,
  GetIndexerPaginatedInterestFundingPaymentsResponse,
  GetIndexerPaginatedRewardsParams,
  GetIndexerPaginatedRewardsResponse,
  IndexerServerListSubaccountsParams,
  ListIndexerSubaccountsResponse,
  GetIndexerMultiSubaccountSnapshotsParams,
  GetIndexerMultiSubaccountSnapshotsResponse,
  GetIndexerRewardsParams,
  GetIndexerRewardsResponse,
  GetIndexerTakerRewardsResponse,
  GetIndexerReferralCodeParams,
  GetIndexerReferralCodeResponse,
  GetIndexerFundingRateParams,
  IndexerFundingRate,
  GetIndexerMultiProductFundingRatesParams,
  GetIndexerMultiProductFundingRatesResponse,
  GetIndexerPerpPricesParams,
  IndexerPerpPrices,
  GetIndexerMultiProductPerpPricesParams,
  GetIndexerMultiProductPerpPricesResponse,
  GetIndexerOraclePricesParams,
  GetIndexerOraclePricesResponse,
  GetIndexerCandlesticksParams,
  GetIndexerCandlesticksResponse,
  GetIndexerProductSnapshotsParams,
  GetIndexerProductSnapshotsResponse,
  GetIndexerMultiProductSnapshotsParams,
  GetIndexerMultiProductSnapshotsResponse,
  GetIndexerEventsParams,
  GetIndexerEventsResponse,
  GetIndexerOrdersParams,
  GetIndexerOrdersResponse,
  GetIndexerMatchEventsParams,
  GetIndexerMatchEventsResponse,
  GetIndexerInterestFundingPaymentsParams,
  GetIndexerInterestFundingPaymentsResponse,
  GetIndexerQuotePriceResponse,
  GetIndexerLinkedSignerParams,
  GetIndexerLinkedSignerResponse,
  GetIndexerMarketSnapshotsParams,
  GetIndexerMarketSnapshotsResponse,
  IndexerServerClaimVrtxMerkleProofsParams,
  GetIndexerClaimVrtxMerkleProofsResponse,
  IndexerServerClaimArbMerkleProofsParams,
  GetIndexerBlitzPointsParams,
  GetIndexerBlitzPointsResponse,
  GetIndexerBlastPointsParams,
  GetIndexerBlastPointsResponse,
  GetIndexerBlitzInitialDropConditionsParams,
  GetIndexerBlitzInitialDropConditionsResponse,
  GetIndexerMakerStatisticsParams,
  GetIndexerMakerStatisticsResponse,
  IndexerServerQueryRequestByType,
  IndexerServerQueryResponseByType,
  GetIndexerSubaccountLiquidationEventsParams,
} from '@vertex-protocol/indexer-client';
import {
  EngineServerStatusResponse,
  GetEngineTimeResponse,
} from '@vertex-protocol/engine-client';

export interface EngineClient {
  getIsBlockedIp(): Promise<Boolean>;
  getStatus(): Promise<EngineServerStatusResponse>;
  getTime(): Promise<GetEngineTimeResponse>;
}

export interface IndexderClient {
  getQuotePrice(): Promise<GetIndexerQuotePriceResponse>;
  getMultiSubaccountSnapshots(
    params: GetIndexerMultiSubaccountSnapshotsParams,
  ): Promise<GetIndexerMultiSubaccountSnapshotsResponse>;
  getPaginatedSubaccountMatchEvents(
    params: GetIndexerSubaccountMatchEventParams,
  ): Promise<GetIndexerSubaccountMatchEventsResponse>;
  getPaginatedSubaccountLiquidationEvents(
    params: GetIndexerSubaccountLiquidationEventsParams,
  ): Promise<GetIndexerSubaccountLiquidationEventsResponse>;
  getEvents(params: GetIndexerEventsParams): Promise<GetIndexerEventsResponse>;
}

export interface HarmonyContext {
  indexerClient: IndexderClient;
  engineClient: EngineClient;
}
