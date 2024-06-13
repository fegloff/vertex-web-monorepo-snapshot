import { GetIndexerQuotePriceResponse } from '@vertex-protocol/indexer-client';
import { parseBigNumber } from '../helper';

export const indexerClient = {
  getQuotePrice: async (): Promise<GetIndexerQuotePriceResponse> => {
    return {
      price: parseBigNumber('0.999969'),
    };
  },
};
