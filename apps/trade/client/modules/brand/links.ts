import {
  VERTEX_LINKS,
  BLITZ_LINKS,
  HARMONY_LINKS,
} from '@vertex-protocol/web-common';
import { clientEnv } from 'common/environment/clientEnv';

const LINKS_BY_BRAND_NAME = {
  vertex: VERTEX_LINKS,
  blitz: BLITZ_LINKS,
  harmony: HARMONY_LINKS,
};

export const LINKS = LINKS_BY_BRAND_NAME[clientEnv.base.brandName];
