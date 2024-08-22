import { context } from './context';
import { subaccount } from './subaccount/subaccount';
import { market } from './market';
import { HarmonyClient } from './types';
import { spot } from './spot';

const isHarmony = (): boolean => {
  return !!process.env.NEXT_PUBLIC_DATA_ENV?.includes('harmony');
};

export function createHarmonyClient(): HarmonyClient {
  return {
    isHarmony: isHarmony(),
    subaccount,
    context,
    market,
    spot,
  };
}
