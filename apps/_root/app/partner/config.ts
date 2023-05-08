import { ChainId } from '@sushiswap/chain'

export const SUPPORTED_CHAINS = [
  ChainId.ETHEREUM,
  ChainId.ARBITRUM,
  ChainId.POLYGON,
  ChainId.AVALANCHE,
  ChainId.FANTOM,
  ChainId.BSC,
  ChainId.GNOSIS,
  ChainId.ARBITRUM_NOVA,
] as const

export type SupportedChainIds = typeof SUPPORTED_CHAINS
export type SupportedChainId = SupportedChainIds[number]
