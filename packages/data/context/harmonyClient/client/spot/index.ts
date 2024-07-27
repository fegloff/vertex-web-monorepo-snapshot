import { BigDecimal } from '@vertex-protocol/utils';
import {
  GetEngineMaxWithdrawableParams,
  EngineServerExecuteFailureResult,
  EngineServerExecuteSuccessResult,
  EngineServerExecuteRequestByType,
} from '@vertex-protocol/engine-client';
import { parseBigNumber } from '../helper';

export const spot = {
  getMaxWithdrawable: async (
    params: GetEngineMaxWithdrawableParams,
  ): Promise<BigDecimal> => {
    const { productId } = params;
    switch (productId) {
      case 0:
        return parseBigNumber('10000000000000000000');
      case 23:
        return parseBigNumber('20000000000000000000');
      default:
        return parseBigNumber('5000000000000000000');
    }
  },
  withdraw: async (
    params: any,
  ): // WithdrawCollateralParams) :
  Promise<
    | EngineServerExecuteFailureResult
    | EngineServerExecuteSuccessResult<keyof EngineServerExecuteRequestByType>
  > => {
    if (Math.random() < 0.9) {
      const successResult: EngineServerExecuteSuccessResult<'withdraw_collateral'> =
        {
          status: 'success',
          data: null,
          signature: '0x' + Math.random().toString(16).substr(2, 130),
          request_type: 'execute_withdraw_collateral',
        };
      return successResult;
    } else {
      // Simulate a failure scenario
      const failureResult: EngineServerExecuteFailureResult = {
        status: 'failure',
        signature: '0x' + Math.random().toString(16).substr(2, 130),
        error: 'Insufficient funds',
        // TODO: Replace with the appropriate error code from your system's error catalogue
        error_code: -32000, // Using a generic error code from EIP-1474 range
        request_type: 'execute_withdraw_collateral',
      };
      return failureResult;
    }
  },
};
