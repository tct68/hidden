import { ChainId } from '@sushiswap/chain'
import { Address, useContract, useProvider } from 'wagmi'

import { multicallAbi } from '../abis'

export const MULTICALL_ADDRESS: Record<number, string> = {
  [ChainId.ETHEREUM]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.GÖRLI]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.POLYGON]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.ARBITRUM]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [ChainId.AVALANCHE]: '0x8C0F842791F03C095b6c633759224FcC9ACe68ea',
  [ChainId.BSC]: '0x47A307e3167820daf22a377D777371753758f59c',
  [ChainId.FANTOM]: '0xB1395e098c0a847CC719Bcf1Fc8114421a9F8232',
  [ChainId.GNOSIS]: '0x2B75358D07417D4e895c952Ca84A44E63AEBE3Dd',
  [ChainId.OPTIMISM]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.ARBITRUM_NOVA]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
}

export const getMulticallContractConfig = (chainId: number | undefined) => ({
  address: (chainId && chainId in MULTICALL_ADDRESS ? MULTICALL_ADDRESS[chainId] : '') as Address,
  abi: multicallAbi,
})

export function useMulticallContract(chainId: number): ReturnType<typeof useContract> {
  return useContract({
    ...getMulticallContractConfig(chainId),
    signerOrProvider: useProvider({ chainId }),
  })
}
