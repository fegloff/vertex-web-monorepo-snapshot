import { BigNumber } from '@ethersproject/bignumber';
import { BigDecimal } from '@vertex-protocol/utils';
import { parseUnits } from 'ethers';
export function parseBigNumber(value: string): BigDecimal {
  // Number {
  if (value.includes('e')) {
    // Handle exponential notation
    return BigNumber.from(
      BigInt(Number(value)).toString(),
    ) as unknown as BigDecimal;
  } else {
    // Handle decimal values
    const [integerPart, fractionalPart = ''] = value.split('.');
    const decimalPlaces = fractionalPart.length;
    return parseUnits(value, decimalPlaces) as unknown as BigDecimal; //  BigNumber;
  }
}
