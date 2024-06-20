import { useQuery } from '@tanstack/react-query';
import { GetIndexerEventsParams, toBigDecimal } from '@vertex-protocol/client';
import {
  PrimaryChainID,
  usePrimaryChainId,
  useVertexClient,
} from '@vertex-protocol/web-data';

import { QueryDisabledError } from 'client/hooks/query/QueryDisabledError';
import { first } from 'lodash';

function latestEventSubmissionIndexQueryKey(chainId: PrimaryChainID) {
  return ['latestEventSubmissionIndex', chainId];
}

export function useLatestEventSubmissionIndex() {
  const primaryChainId = usePrimaryChainId();
  const { vertexClient, harmonyClient } = useVertexClient();
  const disabled = !vertexClient;

  return useQuery({
    queryKey: latestEventSubmissionIndexQueryKey(primaryChainId),
    queryFn: async () => {
      if (disabled) {
        throw new QueryDisabledError();
      }
      const params: GetIndexerEventsParams = {
        limit: {
          type: 'txs',
          value: 1,
        },
        desc: true,
      };
      const events = harmonyClient.isHarmony
        ? await harmonyClient.context.indexerClient.getEvents(params)
        : await vertexClient.context.indexerClient.getEvents(params);

      const latestEvent = first(events);

      if (!latestEvent) {
        console.error('Error fetching latest event', latestEvent);
        throw new Error('Error fetching latest event');
      }

      return toBigDecimal(latestEvent.submissionIndex);
    },
    enabled: !disabled,
    refetchInterval: 10000,
  });
}
