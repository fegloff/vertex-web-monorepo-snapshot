import { clientEnv } from 'common/environment/clientEnv';

export const PRIMARY_QUOTE_SYMBOL = {
  vertex: 'USDC',
  blitz: 'USDB',
  harmony: 'USDC', // 'ONE'
}[clientEnv.base.brandName];
