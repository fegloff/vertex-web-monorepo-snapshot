import { PRIMARY_QUOTE_SYMBOL } from 'common/productMetadata/primaryQuoteSymbol';
import { SpotProductMetadata } from 'common/productMetadata/types';
import {
  ETH_HARMONY,
  USDC_HARMONY,
  USDT_HARMONY,
  VRTX_HARMONY,
  WBTC_HARMONY,
  WONE_HARMONY,
} from './tokens';
import { NOOP_MARKET_DETAILS } from '../noopMetadata';

export const HARMONY_SPOT_METADATA_BY_PRODUCT_ID: Record<
  number,
  SpotProductMetadata
> = {
  0: {
    token: USDC_HARMONY,
    marketName: '',
    marketDetails: NOOP_MARKET_DETAILS,
  },
  1: {
    // update
    token: VRTX_HARMONY,
    marketName: '', // VRTX-HARMONY
    marketDetails: NOOP_MARKET_DETAILS,
  },
  3: {
    token: WBTC_HARMONY,
    marketName: `wBTC-${PRIMARY_QUOTE_SYMBOL}`,
    marketDetails: NOOP_MARKET_DETAILS,
  },
  5: {
    token: ETH_HARMONY,
    marketName: `ETH-${PRIMARY_QUOTE_SYMBOL}`,
    marketDetails: NOOP_MARKET_DETAILS,
  },
  7: {
    token: USDT_HARMONY,
    marketName: `USDT-${PRIMARY_QUOTE_SYMBOL}`,
    marketDetails: NOOP_MARKET_DETAILS,
  },
  9: {
    token: WONE_HARMONY,
    marketName: `wONE-${PRIMARY_QUOTE_SYMBOL}`,
    marketDetails: NOOP_MARKET_DETAILS,
  },
};
