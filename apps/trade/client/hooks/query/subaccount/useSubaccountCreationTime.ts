import { useQuery } from '@tanstack/react-query';
import { useSubaccountContext } from 'client/context/subaccount/SubaccountContext';
import {
  PrimaryChainID,
  usePrimaryChainId,
  useVertexClient,
} from '@vertex-protocol/web-data';
import { QueryDisabledError } from 'client/hooks/query/QueryDisabledError';
import { first } from 'lodash';
import { createQueryKey } from '@vertex-protocol/web-data';
import { GetIndexerEventsParams } from '@vertex-protocol/client';

export function subaccountCreationTimeQueryKey(
  chainId?: PrimaryChainID,
  subaccountOwner?: string,
  subaccountName?: string,
) {
  return createQueryKey(
    'subaccountCreationTime',
    chainId,
    subaccountOwner,
    subaccountName,
  );
}

/**
 * Returns the creation time for the subaccount, indicated by the time of the first deposit event. Data is
 * null if the subaccount does not exist.
 */
export function useSubaccountCreationTime() {
  const primaryChainId = usePrimaryChainId();
  const { vertexClient, harmonyClient } = useVertexClient();
  const {
    currentSubaccount: { address: subaccountOwner, name: subaccountName },
  } = useSubaccountContext();

  const disabled = !vertexClient || !subaccountOwner;

  return useQuery({
    queryKey: subaccountCreationTimeQueryKey(
      primaryChainId,
      subaccountOwner,
      subaccountName,
    ),
    queryFn: async () => {
      if (disabled) {
        throw new QueryDisabledError();
      }
      const params: GetIndexerEventsParams = {
        subaccount: {
          subaccountOwner,
          subaccountName,
        },
        limit: {
          type: 'events',
          value: 1,
        },
        desc: false,
        eventTypes: ['deposit_collateral'],
      };

      const events = harmonyClient.isHarmony
        ? await harmonyClient.context.indexerClient.getEvents(params)
        : await vertexClient.context.indexerClient.getEvents(params);

      return first(events)?.timestamp ?? null;
    },
    enabled: !disabled,
    refetchInterval: (data) => {
      // If a subaccount is not yet created, refetch at some interval, but if we already have data, then the creation
      // time will not change, so we don't need to refetch
      return data == null ? 30000 : false;
    },
  });
}
