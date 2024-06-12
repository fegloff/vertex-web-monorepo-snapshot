import {
  ChainEnv,
  VertexContracts,
  VertexDeploymentAddresses,
} from '@vertex-protocol/contracts';
import { GetEngineSubaccountSummaryParams } from '@vertex-protocol/engine-client';
import { SubaccountSummaryResponse } from '@vertex-protocol/contracts';
import { EngineClient } from '@vertex-protocol/engine-client';
import { IndexerClient } from '@vertex-protocol/indexer-client';
import { TriggerClient } from '@vertex-protocol/trigger-client';
import { Provider, Signer } from 'ethers';
import { HarmonyContext } from './context/types';

export interface VertexClientContextOpts {
  contractAddresses: VertexDeploymentAddresses;
  engineEndpoint: string;
  indexerEndpoint: string;
  triggerEndpoint: string;
}

export interface HarmonyVertexClientContext {
  signerOrProvider: Signer | Provider;
  linkedSigner?: Signer;
  contracts: VertexContracts;
  contractAddresses: HarmonyVertexDeploymentAddresses;
  engineClient: EngineClient;
  indexerClient: IndexerClient;
  triggerClient: TriggerClient;
}

export type HarmonyVertexDeploymentAddresses = {
  [K in keyof VertexContracts]: string;
};

export interface HarmonyVertexClientContextOpts {
  contractAddresses: HarmonyVertexDeploymentAddresses;
  engineEndpoint: string;
  indexerEndpoint: string;
  triggerEndpoint: string;
}

export type CreateHarmonyVertexClientContextSignerOpts = Pick<
  HarmonyVertexClientContext,
  'signerOrProvider' | 'linkedSigner'
>;

export type CreateHarmonyVertexClientContextOpts =
  | HarmonyVertexClientContextOpts
  | ChainEnv;

export interface HarmonyClient {
  subaccount: HarmonySubaccountAPI;
  context: HarmonyContext;
}

export interface HarmonySubaccountAPI {
  getEngineSubaccountSummary(
    params: GetEngineSubaccountSummaryParams,
  ): Promise<SubaccountSummaryResponse>;
}
