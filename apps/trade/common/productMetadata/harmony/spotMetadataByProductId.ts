import {
  USDC_HARDHAT,
  WBTC_HARDHAT,
  WETH_HARDHAT,
} from 'common/productMetadata/local/tokens';
import {
  WBTC_SPOT_MARKET_DETAILS,
  WETH_SPOT_MARKET_DETAILS,
} from 'common/productMetadata/marketDetailsMetadata';
import { PRIMARY_QUOTE_SYMBOL } from 'common/productMetadata/primaryQuoteSymbol';
import { SpotProductMetadata } from 'common/productMetadata/types';
import { USDC_HARMONY } from './tokens';
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
};
