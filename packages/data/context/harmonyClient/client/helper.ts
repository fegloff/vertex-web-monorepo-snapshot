import { BigNumber } from '@ethersproject/bignumber';
import { BigDecimal } from '@vertex-protocol/utils';
import { parseUnits } from 'ethers';
import { toBigDecimal } from '@vertex-protocol/client';

// export function parseBigNumber(value: string): BigDecimal {
//   // Number {
//   if (value.includes('e')) {
//     // Handle exponential notation
//     return BigNumber.from(
//       BigInt(Number(value)).toString(),
//     ) as unknown as BigDecimal;
//   } else {
//     // Handle decimal values
//     const [integerPart, fractionalPart = ''] = value.split('.');
//     const decimalPlaces = fractionalPart.length;
//     return parseUnits(value, decimalPlaces) as unknown as BigDecimal; //  BigNumber;
//   }
// }

export function parseBigNumber(value: string): BigDecimal | any {
  let bigNumberValue: BigInt | BigNumber;
  if (typeof value === 'string') {
    if (value && value.includes('e')) {
      // Handle exponential notation
      const [mantissa, exponentStr] = value.split(/e/i);
      const exponent = parseInt(exponentStr, 10);
      const decimalPlaces = (mantissa.split('.')[1] || '').length;
      const wholePlaces = exponent + decimalPlaces;
      const significantDigits = mantissa
        .replace('.', '')
        .replace(/^0+/, '')
        .replace(/0+$/, '');
      const fullNumberStr =
        significantDigits +
        '0'.repeat(Math.max(0, wholePlaces - significantDigits.length));
      bigNumberValue = BigNumber.from(fullNumberStr);
    } else {
      // Handle decimal values
      const [integerPart, fractionalPart = ''] = value.split('.');
      const decimalPlaces = fractionalPart.length;
      bigNumberValue = BigNumber.from(
        parseUnits(value, decimalPlaces).toString(),
      ); // BigNumber.from(value.replace('.', ''));
    }

    // Convert BigNumber to BigDecimal
    return toBigDecimal(bigNumberValue.toString());
  } else {
    return value;
  }
}

export function hasBigDecimalType(key: string): boolean {
  const keys = [
    'amount',
    'lpAmount',
    'oraclePrice',
    'longWeightInitial',
    'shortWeightInitial',
    'longWeightMaintenance',
    'shortWeightMaintenance',
    'totalLpQuoteAmount',
    'totalLpBaseAmount',
    'totalLpSupply',
    'interestFloor',
    'interestInflectionUtil',
    'interestSmallCap',
    'interestLargeCap',
    'totalDeposited',
    'totalBorrowed',
    'openInterest',
    'cumulativeFundingLong',
    'cumulativeFundingShort',
    'maintenance',
    'initial',
    'unweighted',
    'health',
    'longWeightInitial',
    'priceIncrement',
    'minSize',
    'sizeIncrement',
  ];
  return keys.includes(key);
}
