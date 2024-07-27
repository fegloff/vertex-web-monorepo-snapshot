import { BigDecimal } from '@vertex-protocol/utils';
import {
  GetEngineMaxWithdrawableParams,
  EngineServerExecuteFailureResult,
  EngineServerExecuteSuccessResult,
  EngineServerExecuteRequestByType,
} from '@vertex-protocol/engine-client';

export interface HarmonySpot {
  getMaxWithdrawable(
    params: GetEngineMaxWithdrawableParams,
  ): Promise<BigDecimal>;
  withdraw(
    params: any,
  ): Promise<
    | EngineServerExecuteFailureResult
    | EngineServerExecuteSuccessResult<keyof EngineServerExecuteRequestByType>
  >;
}
