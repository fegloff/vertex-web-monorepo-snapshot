import {
  BTC_PERP_METADATA,
  ETH_PERP_METADATA,
  ONE_PERP_METADATA,
} from 'common/productMetadata/perpMetadata';
import { PerpProductMetadata } from 'common/productMetadata/types';

export const HARMONY_PERP_METADATA_BY_PRODUCT_ID: Record<
  number,
  PerpProductMetadata
> = {
  2: BTC_PERP_METADATA,
  4: ETH_PERP_METADATA,
  92: ONE_PERP_METADATA,
} as const;
