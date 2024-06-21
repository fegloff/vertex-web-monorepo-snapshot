import {
  SubaccountSummaryResponse,
  MarginUsageFractions,
} from '@vertex-protocol/contracts';
import { BigDecimal } from '@vertex-protocol/utils';

import * as contractsJson from '../../../mock-data/contracts';
import { parseBigNumber } from '../../../client/helper';

export const subaccount = {
  calcSubaccountMarginUsageFractions: (
    summary: SubaccountSummaryResponse,
  ): MarginUsageFractions => {
    const csmuf = JSON.parse(
      JSON.stringify(contractsJson.calcSubaccountMarginUsageFractions),
      (key, value) => {
        if (['initial', 'maintenance'].includes(key)) {
          return parseBigNumber(value);
        }
        return value;
      },
    ) as MarginUsageFractions;
    return csmuf;
  },
  calcSubaccountLeverage: (summary: SubaccountSummaryResponse): BigDecimal => {
    return parseBigNumber('0');
  },
};
