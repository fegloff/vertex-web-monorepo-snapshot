import { useQuery } from '@tanstack/react-query';
import {
  createHarmonyClient,
  usePrimaryChainId,
  useVertexClient,
} from '@vertex-protocol/web-data';
import { QueryDisabledError } from 'client/hooks/query/QueryDisabledError';

export function useIndexerQuotePrice() {
  const primaryChainId = usePrimaryChainId();
  const { vertexClient, harmonyClient } = useVertexClient();
  const disabled = !vertexClient;
  return useQuery({
    queryKey: ['quotePrice', primaryChainId],
    queryFn: async () => {
      if (disabled) {
        throw new QueryDisabledError();
      }
      return harmonyClient.isHarmony
        ? harmonyClient.context.indexerClient.getQuotePrice()
        : vertexClient.context.indexerClient.getQuotePrice();
    },
    enabled: !disabled,
  });
}
