import { EVMContextParams, WagmiConfigParams } from '@vertex-protocol/web-data';
import { CONNECTOR_OPTIONS_METADATA } from 'client/modules/brand/consts/connectorMetadata';
import { clientEnv } from 'common/environment/clientEnv';
import { ChainEnv } from '@vertex-protocol/client';
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  fantom,
  mainnet,
  blast,
  blastSepolia,
  hardhat,
  localhost,
  mantle,
  optimism,
  polygon,
  sepolia,
  harmonyMainnet,
  harmonyTestnet,
  arbitrumSepolia,
  mantleSepoliaTestnet,
} from '@vertex-protocol/web-data';

export function getEVMContextParams(): EVMContextParams {
  const connectorOptions: WagmiConfigParams['connectorOptions'] = {
    walletConnect: {
      projectId: clientEnv.integrations.walletConnectProjectId,
      metadata: CONNECTOR_OPTIONS_METADATA.walletConnect,
    },
    coinbase: CONNECTOR_OPTIONS_METADATA.coinbase,
  };

  // ETH Mainnet is always required for ENS name resolution
  switch (clientEnv.base.dataEnv) {
    case 'local':
      return {
        supportedChainEnvs: ['local'],
        supportedChains: [localhost, hardhat, mainnet],
        connectorOptions,
      };
    case 'vertexTestnet':
      return {
        supportedChainEnvs: ['testnet', 'mantleTestnet'],
        supportedChains: [
          arbitrumSepolia,
          mantleSepoliaTestnet,
          sepolia,
          mainnet,
        ],
        connectorOptions,
      };
    case 'vertexMainnet':
      return {
        supportedChainEnvs: ['mainnet'],
        supportedChains: [
          arbitrum,
          mainnet,
          // Additional chains for bridging
          optimism,
          bsc,
          polygon,
          base,
          avalanche,
          fantom,
          mantle,
        ],
        connectorOptions,
      };
    case 'blitzTestnet':
      return {
        supportedChainEnvs: ['blastTestnet'],
        supportedChains: [blastSepolia, sepolia, mainnet],
        connectorOptions,
      };
    case 'blitzMainnet':
      return {
        supportedChainEnvs: ['blastMainnet'],
        supportedChains: [blast, mainnet],
        connectorOptions,
      };
    case 'harmonyMainnet':
      return {
        supportedChainEnvs: ['harmonyMainnet'],
        supportedChains: [harmonyMainnet],
        connectorOptions,
      };
    case 'harmonyTestnet':
      return {
        supportedChainEnvs: ['harmonyTestnet'],
        supportedChains: [harmonyTestnet],
        connectorOptions,
      };
  }
}
