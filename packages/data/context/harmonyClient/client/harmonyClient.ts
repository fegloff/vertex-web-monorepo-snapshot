import { useIsChainType } from '../../../hooks';
import { context } from './context';
import subaccount from './subaccount';
import { HarmonyClient, HarmonySubaccountAPI } from './types';

const isHarmony = (): boolean => {
  return !!process.env.NEXT_PUBLIC_DATA_ENV?.includes('harmony');
};

export function createHarmonyClient(): HarmonyClient {
  return {
    isHarmony: isHarmony(),
    subaccount,
    context,
  };
}
