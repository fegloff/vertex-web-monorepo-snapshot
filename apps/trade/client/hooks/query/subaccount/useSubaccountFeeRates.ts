import { useQuery } from '@tanstack/react-query';
import {
  PrimaryChainID,
  createQueryKey,
  useEnableSubaccountQueries,
  usePrimaryChainId,
  useVertexClient,
} from '@vertex-protocol/web-data';
import { useSubaccountContext } from 'client/context/subaccount/SubaccountContext';
import { QueryDisabledError } from 'client/hooks/query/QueryDisabledError';
import { ZeroAddress } from 'ethers';

export function subaccountFeeRatesQueryKey(
  chainId?: PrimaryChainID,
  sender?: string,
  subaccountName?: string,
) {
  return createQueryKey('subaccountFeeRates', chainId, sender, subaccountName);
}

export function useSubaccountFeeRates() {
  const primaryChainId = usePrimaryChainId();
  const { currentSubaccount } = useSubaccountContext();
  const { vertexClient, harmonyClient } = useVertexClient();
  const enableSubaccountQueries = useEnableSubaccountQueries();
  const disabled = !vertexClient || !enableSubaccountQueries;

  return useQuery({
    queryKey: subaccountFeeRatesQueryKey(
      primaryChainId,
      currentSubaccount.address,
      currentSubaccount.name,
    ),
    queryFn: async () => {
      if (disabled) {
        throw new QueryDisabledError();
      }
      const params = {
        subaccountOwner: currentSubaccount.address ?? ZeroAddress,
        subaccountName: currentSubaccount.name ?? '',
      };
      return harmonyClient.isHarmony
        ? harmonyClient.subaccount.getSubaccountFeeRates(params)
        : vertexClient.subaccount.getSubaccountFeeRates(params);
    },

    // No refetch here as fee rates are unlikely to change
    enabled: !disabled,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
