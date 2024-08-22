import { ethers } from 'ethers';
import { useEVMContext } from '../EVMContext';

type ContractCall = {
  address: string;
  abi: any;
  functionName: string;
  args: any[];
};

type CallResult = {
  error?: Error;
  result?: any;
  status: 'success' | 'failure';
};

const useCustomMulticall = () => {
  const { primaryProvider } = useEVMContext();

  const customMulticall = async (
    contractCalls: ContractCall[],
  ): Promise<CallResult[]> => {
    const provider = primaryProvider;

    const results = await Promise.all(
      contractCalls.map(async ({ address, abi, functionName, args }) => {
        try {
          const contract = new ethers.Contract(address, abi, provider);
          const result = await contract[functionName](...args);
          return { result, status: 'success' as const };
        } catch (error) {
          return {
            error: error instanceof Error ? error : new Error('Unknown error'),
            status: 'failure' as const,
          };
        }
      }),
    );

    return results;
  };

  return { customMulticall };
};

export default useCustomMulticall;
