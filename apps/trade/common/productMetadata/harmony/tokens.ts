import { localSdkConfig } from '@vertex-protocol/web-data';
import { harmonyMainnet } from '@vertex-protocol/web-data';
import { PRIMARY_QUOTE_SYMBOL } from 'common/productMetadata/primaryQuoteSymbol';
import { TOKEN_ICONS } from 'common/productMetadata/tokenIcons';
import { Token } from 'common/productMetadata/types';
import { VRTX_TOKEN_INFO } from 'common/productMetadata/vertexTokenInfo';
import { ZeroAddress } from 'ethers';

const harmonyChainId = harmonyMainnet.id;

export const USDC_HARMONY: Token = {
  // contact address taken from here: https://www.coingecko.com/en/coins/harmony-horizen-bridged-usdc-harmony
  address: '0x985458e523db3d53125813ed68c274899e9dfab4',
  //   address: localSdkConfig.spotProducts['USDC'].address.toLowerCase(),
  chainId: harmonyChainId,
  tokenDecimals: localSdkConfig.spotProducts['USDC'].decimals,
  name: 'USD Coin',
  symbol: PRIMARY_QUOTE_SYMBOL,
  icon: TOKEN_ICONS.usdc,
};
