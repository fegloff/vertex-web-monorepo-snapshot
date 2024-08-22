import {
  ETH_PERP_METADATA,
  USDT_PERP_METADATA,
  WBTC_PERP_METADATA,
  WONE_PERP_METADATA,
} from 'common/productMetadata/perpMetadata';
import { PerpProductMetadata } from 'common/productMetadata/types';

export const HARMONY_PERP_METADATA_BY_PRODUCT_ID: Record<
  number,
  PerpProductMetadata
> = {
  2: WBTC_PERP_METADATA,
  4: ETH_PERP_METADATA,
  6: WONE_PERP_METADATA,
  8: USDT_PERP_METADATA,
} as const;
