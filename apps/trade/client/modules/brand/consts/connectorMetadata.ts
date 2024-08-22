import { WagmiConfigParams } from '@vertex-protocol/web-data';
import { BrandName } from '@vertex-protocol/web-ui';
import { clientEnv } from 'common/environment/clientEnv';

interface ConnectorOptionsMetadata {
  walletConnect: WagmiConfigParams['connectorOptions']['walletConnect']['metadata'];
  coinbase: WagmiConfigParams['connectorOptions']['coinbase'];
}

const CONNECTOR_OPTIONS_METADATA_BY_BRAND_NAME: Record<
  BrandName,
  ConnectorOptionsMetadata
> = {
  // local: {

  // },
  vertex: {
    walletConnect: {
      name: 'Vertex',
      description: 'Vertex',
      url: 'https://app.vertexprotocol.com/',
      icons: ['https://app.vertexprotocol.com/vertex-icon.svg'],
    },
    coinbase: {
      appName: 'Vertex',
    },
  },
  blitz: {
    walletConnect: {
      name: 'Blitz',
      description: 'Blitz',
      url: 'https://app.blitz.exchange/',
      icons: ['https://app.blitz.exchange/blitz-icon.svg'],
    },
    coinbase: {
      appName: 'Blitz',
    },
  },
  harmony: {
    walletConnect: {
      name: 'Harmony',
      description: 'Harmony',
      url: 'https://app.harmony.exchange/',
      icons: ['https://app.harmony.exchange/harmony-icon.svg'],
    },
    coinbase: {
      appName: 'Harmony',
    },
  },
};

export const CONNECTOR_OPTIONS_METADATA =
  CONNECTOR_OPTIONS_METADATA_BY_BRAND_NAME[clientEnv.base.brandName];
