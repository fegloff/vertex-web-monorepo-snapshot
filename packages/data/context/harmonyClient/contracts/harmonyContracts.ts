import { utils } from './utils';

const isHarmony = (): boolean => {
  return !!process.env.NEXT_PUBLIC_DATA_ENV?.includes('harmony');
};

export function createHarmonyContracts() {
  return {
    isHarmony: isHarmony(),
    utils,
  };
}
