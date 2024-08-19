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
  address: sdkConfig.spotProducts['VRTX'].address.toLowerCase(),
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

export const WBTC_HARMONY: Token = {
  address: '0x118f50d23810c5E09Ebffb42d7D3328dbF75C2c2',
  chainId: harmonyChainId,
  tokenDecimals: 8,
  name: 'wBTC',
  symbol: 'wBTC',
  icon: TOKEN_ICONS.wbtc,
};

export const WONE_HARMONY: Token = {
  address: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
  chainId: harmonyChainId,
  tokenDecimals: 18,
  name: 'wONE',
  symbol: 'ONE',
  icon: TOKEN_ICONS.one,
};

export const USDT_HARMONY: Token = {
  address: '0xF2732e8048f1a411C63e2df51d08f4f52E598005',
  chainId: harmonyChainId,
  tokenDecimals: 6,
  name: 'Tether USD',
  symbol: 'USDT',
  icon: TOKEN_ICONS.usdt,
};

export const ETH_HARMONY: Token = {
  address: '0x4cC435d7b9557d54d6EF02d69Bbf72634905Bf11',
  chainId: harmonyChainId,
  tokenDecimals: 18,
  name: 'Ethereum',
  symbol: 'ETH',
  icon: TOKEN_ICONS.eth,
};
