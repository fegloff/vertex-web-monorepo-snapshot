import { HarmonyContext } from './context/types';
import { HarmonySubaccountAPI } from './subaccount/types';

export interface HarmonyClient {
  isHarmony: boolean;
  subaccount: HarmonySubaccountAPI;
  context: HarmonyContext;
}
