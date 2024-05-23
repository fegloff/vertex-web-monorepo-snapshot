import { localSdkConfig } from '@vertex-protocol/web-data';
import { harmonyOne } from '@wagmi/core/chains';
import { PRIMARY_QUOTE_SYMBOL } from 'common/productMetadata/primaryQuoteSymbol';
import { TOKEN_ICONS } from 'common/productMetadata/tokenIcons';
import { Token } from 'common/productMetadata/types';
import { VRTX_TOKEN_INFO } from 'common/productMetadata/vertexTokenInfo';
import { ZeroAddress } from 'ethers';

const harmonyChainId = harmonyOne.id;

export const USDC_HARMONY: Token = {
  address: localSdkConfig.spotProducts['USDC'].address.toLowerCase(),
  chainId: harmonyChainId,
  tokenDecimals: localSdkConfig.spotProducts['USDC'].decimals,
  name: 'USD Coin',
  symbol: PRIMARY_QUOTE_SYMBOL,
  icon: TOKEN_ICONS.usdc,
};
