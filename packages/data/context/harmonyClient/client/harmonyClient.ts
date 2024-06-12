import { context } from './context';
import subaccount from './subaccount';
import { HarmonyClient, HarmonySubaccountAPI } from './types';

export function createHarmonyClient(): HarmonyClient {
  return {
    subaccount,
    context,
  };
}
