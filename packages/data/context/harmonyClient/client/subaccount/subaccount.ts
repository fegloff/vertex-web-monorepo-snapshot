import { GetEngineSubaccountSummaryParams } from '@vertex-protocol/engine-client';
import * as subaccountJson from '../../mock-data/subaccount';
import { SubaccountSummaryResponse } from '@vertex-protocol/contracts';
import {
  GetIndexerLinkedSignerParams,
  GetIndexerLinkedSignerResponse,
} from '@vertex-protocol/indexer-client';
import {
  GetEngineSubaccountFeeRatesResponse,
  GetEngineSubaccountFeeRatesParams,
  GetEngineEstimatedSubaccountSummaryParams,
} from '@vertex-protocol/engine-client';
import { BigDecimal } from '@vertex-protocol/utils';
import { hasBigDecimalType, parseBigNumber } from '../helper';
import { HarmonySubaccountAPI } from './types';

interface Withdrawal {
  [key: string]: BigDecimal;
}

export const subaccount: HarmonySubaccountAPI = {
  getEngineSubaccountSummary: async (
    params: GetEngineSubaccountSummaryParams,
  ): Promise<SubaccountSummaryResponse> => {
    const subaccountSummary = JSON.parse(
      JSON.stringify(subaccountJson.getEngineSubaccountSummary),
      (key, value) => {
        if (hasBigDecimalType(key)) {
          return parseBigNumber(value);
        }
        return value;
      },
    ) as SubaccountSummaryResponse;
    return subaccountSummary;
  },
  getSubaccountLinkedSignerWithRateLimit: async (
    params: GetIndexerLinkedSignerParams,
  ): Promise<GetIndexerLinkedSignerResponse> => {
    const {
      subaccount: { subaccountOwner, subaccountName },
    } = params;
    const signerWithRateLimits = JSON.parse(
      JSON.stringify(subaccountJson.getSubaccountLinkedSignerWithRateLimit),
      (key, value) => {
        if (
          ['totalTxLimit', 'remainingTxs', 'waitTimeUntilNextTx'].includes(key)
        ) {
          return parseBigNumber(value);
        }
        return value;
      },
    ) as GetIndexerLinkedSignerResponse;
    return signerWithRateLimits;
  },
  getSubaccountFeeRates: async (
    params: GetEngineSubaccountFeeRatesParams,
  ): Promise<GetEngineSubaccountFeeRatesResponse> => {
    const rates = JSON.parse(
      JSON.stringify(subaccountJson.getSubaccountFeeRates),
      (key, value) => {
        if (
          [
            'healthCheckSequencerFee',
            'liquidationSequencerFee',
            'taker',
            'maker',
          ].includes(key)
        ) {
          return parseBigNumber(value);
        } else if (
          key === 'withdrawal' &&
          typeof value === 'object' &&
          value !== null
        ) {
          const withdrawalObject: Withdrawal = {};
          for (const [tokenId, amount] of Object.entries(value)) {
            withdrawalObject[tokenId] = parseBigNumber(amount as string);
          }
          return withdrawalObject;
        }
        return value;
      },
    ) as GetEngineSubaccountFeeRatesResponse; // ,;
    return rates;
  },
  getEngineEstimatedSubaccountSummary: async (
    params: GetEngineEstimatedSubaccountSummaryParams,
  ): Promise<SubaccountSummaryResponse> => {
    const subaccountSummary = JSON.parse(
      JSON.stringify(subaccountJson.getEngineEstimatedSubaccountSummary),
      (key, value) => {
        if (hasBigDecimalType(key)) {
          return parseBigNumber(value);
        }
        return value;
      },
    ) as SubaccountSummaryResponse;
    return subaccountSummary;
  },
};
