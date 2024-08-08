import {
  harmonyTestnetSdkConfig,
  harmonySdkConfig,
  harmonyTestnet,
} from '@vertex-protocol/web-data';
import { harmonyMainnet } from '@vertex-protocol/web-data';
import { PRIMARY_QUOTE_SYMBOL } from 'common/productMetadata/primaryQuoteSymbol';
import { TOKEN_ICONS } from 'common/productMetadata/tokenIcons';
import { Token } from 'common/productMetadata/types';
import { VRTX_TOKEN_INFO } from 'common/productMetadata/vertexTokenInfo';
import { clientEnv } from 'common/environment/clientEnv';

const harmonyChainId =
  clientEnv.base.dataEnv === 'harmonyMainnet'
    ? harmonyMainnet.id
    : harmonyTestnet.id;

const sdkConfig =
  clientEnv.base.dataEnv === 'harmonyMainnet'
    ? harmonySdkConfig
    : harmonyTestnetSdkConfig;

export const VRTX_HARMONY: Token = {
  address: sdkConfig.spotProducts['USDC'].address.toLowerCase(),
  chainId: harmonyChainId,
  tokenDecimals: 18,
  ...VRTX_TOKEN_INFO,
};

export const USDC_HARMONY: Token = {
  address: sdkConfig.spotProducts['QUOTE'].address.toLowerCase(),
  chainId: harmonyChainId,
  tokenDecimals: sdkConfig.spotProducts['QUOTE'].decimals,
  name: 'USD Coin',
  symbol: PRIMARY_QUOTE_SYMBOL,
  icon: TOKEN_ICONS.usdc,
};
