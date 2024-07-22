import { PRIMARY_QUOTE_SYMBOL } from 'common/productMetadata/primaryQuoteSymbol';
import { SpotProductMetadata } from 'common/productMetadata/types';
import { USDC_HARMONY, VRTX_HARMONY } from './tokens';
import { NOOP_MARKET_DETAILS } from '../noopMetadata';

export const HARMONY_SPOT_METADATA_BY_PRODUCT_ID: Record<
  number,
  SpotProductMetadata
> = {
  0: {
    // update
    token: VRTX_HARMONY,
    marketName: '', // VRTX-HARMONY
    marketDetails: NOOP_MARKET_DETAILS,
  },
  23: {
    token: USDC_HARMONY,
    marketName: '',
    marketDetails: NOOP_MARKET_DETAILS,
  },
};
