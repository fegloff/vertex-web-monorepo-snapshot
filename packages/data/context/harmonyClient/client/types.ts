import { GetEngineSubaccountSummaryParams } from '@vertex-protocol/engine-client';
import { SubaccountSummaryResponse } from '@vertex-protocol/contracts';
import { HarmonyContext } from './context/types';

export interface HarmonyClient {
  isHarmony: boolean;
  subaccount: HarmonySubaccountAPI;
  context: HarmonyContext;
}

export interface HarmonySubaccountAPI {
  getEngineSubaccountSummary(
    params: GetEngineSubaccountSummaryParams,
  ): Promise<SubaccountSummaryResponse>;
}
