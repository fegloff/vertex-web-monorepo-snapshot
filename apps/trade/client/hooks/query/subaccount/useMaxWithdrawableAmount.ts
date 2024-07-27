import { useQuery } from '@tanstack/react-query';
import { BigDecimal } from '@vertex-protocol/utils';
import { GetEngineMaxWithdrawableParams } from '@vertex-protocol/engine-client';
import {
  PrimaryChainID,
  createQueryKey,
  usePrimaryChainId,
  useVertexClient,
} from '@vertex-protocol/web-data';
import { useSubaccountContext } from 'client/context/subaccount/SubaccountContext';
import { QueryDisabledError } from 'client/hooks/query/QueryDisabledError';

export function maxWithdrawableQueryKey(
  chainId?: PrimaryChainID,
  sender?: string,
  subaccountName?: string,
  productId?: number,
  spotLeverage?: boolean,
) {
  return createQueryKey(
    'maxWithdrawable',
    chainId,
    sender,
    subaccountName,
    productId,
    spotLeverage,
  );
}

interface Params {
  productId?: number;
  spotLeverage?: boolean;
}

// Always non-negative, includes any current positive balances
export function useMaxWithdrawableAmount(params?: Params) {
  const primaryChainId = usePrimaryChainId();
  const { currentSubaccount } = useSubaccountContext();
  const { vertexClient, harmonyClient } = useVertexClient();

  const disabled =
    !currentSubaccount.address ||
    !currentSubaccount.name ||
    !vertexClient ||
    params == null;

  const getMaxWithdrawableParams: GetEngineMaxWithdrawableParams = {
    subaccountOwner: currentSubaccount.address ?? '',
    subaccountName: currentSubaccount.name,
    productId: params?.productId ?? 0,
    spotLeverage: params?.spotLeverage ?? false,
  };
  return useQuery({
    queryKey: maxWithdrawableQueryKey(
      primaryChainId,
      currentSubaccount.address,
      currentSubaccount.name,
      params?.productId,
      params?.spotLeverage,
    ),
    queryFn: async (): Promise<BigDecimal> => {
      if (disabled) {
        throw new QueryDisabledError();
      }
      const maxWithdrawable = harmonyClient.isHarmony
        ? await harmonyClient.spot.getMaxWithdrawable(getMaxWithdrawableParams)
        : await vertexClient.spot.getMaxWithdrawable(getMaxWithdrawableParams);
      return maxWithdrawable;
    },
    enabled: !disabled,
    refetchInterval: 30000,
  });
}
