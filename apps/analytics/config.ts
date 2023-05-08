import { ChainId } from '@sushiswap/chain'

export const TRIDENT_ENABLED_NETWORKS: ChainId[] = [
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.ARBITRUM,
]

export const AMM_ENABLED_NETWORKS = [
  ChainId.ETHEREUM,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.GNOSIS,
  ChainId.FANTOM,
  ChainId.BSC,
  ChainId.ARBITRUM_NOVA,
  ChainId.POLYGON,
]

export const SUPPORTED_CHAIN_IDS = Array.from(new Set([...AMM_ENABLED_NETWORKS, ...TRIDENT_ENABLED_NETWORKS]))
