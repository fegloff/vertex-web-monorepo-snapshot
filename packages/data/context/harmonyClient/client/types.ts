import { HarmonyContext } from './context/types';
import { HarmonyMarket } from './market/types';
import { HarmonySpot } from './spot/types';
import { HarmonySubaccountAPI } from './subaccount/types';

export interface HarmonyClient {
  isHarmony: boolean;
  subaccount: HarmonySubaccountAPI;
  context: HarmonyContext;
  market: HarmonyMarket;
  spot: HarmonySpot;
}
