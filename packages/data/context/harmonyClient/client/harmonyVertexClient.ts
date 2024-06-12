import { Signer } from 'ethers';
import { HarmonyVertexClientContext } from './types';
import subaccount from './subaccount';
import { VertexClient } from '@vertex-protocol/client';

/**
 * Client for querying and executing against Vertex Clearinghouse.
 * Usually not instantiated directly. Instead, use {@link createVertexClient:CLIENT}.
 */
export class HarmonyVertexClient {
  context: HarmonyVertexClientContext;
  market: any; // MarketAPI;
  subaccount: any; // SubaccountAPI;
  spot: any; // SpotAPI;
  perp: any; // PerpAPI;
  rewards: any; // RewardsAPI;
  ws: any; //WebsocketAPI;
  vclient: VertexClient;

  constructor(context: HarmonyVertexClientContext, vclient: VertexClient) {
    this.vclient = vclient;
    this.context = context;
    this.subaccount = subaccount;
  }

  async setSignerOrProvider(
    signerOrProvider: HarmonyVertexClientContext['signerOrProvider'],
  ): Promise<void> {
    await this.vclient.setSignerOrProvider(signerOrProvider);
  }
  setLinkedSigner(linkedSigner: Signer | null): void {
    this.vclient.setLinkedSigner(linkedSigner);
  }
  // /**
  //  * Sets the signer or provider for the client. Will cause a full reload of the current context.
  //  * @param signerOrProvider
  //  */

  // private setupFromContext;
}
//# sourceMappingURL=client.d.ts.map
