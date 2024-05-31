import { clientEnv } from 'common/environment/clientEnv';

export const PRIMARY_QUOTE_SYMBOL = {
  vertex: 'USDC',
  blitz: 'USDB',
  harmony: 'ONE',
}[clientEnv.base.brandName];
