import { ChainId } from '@sushiswap/chain'
import { V3_SUPPORTED_CHAIN_IDS } from '@sushiswap/v3-sdk'

export const TRIDENT_ENABLED_NETWORKS: ChainId[] = [
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC
]

export const AMM_ENABLED_NETWORKS: ChainId[] = [
  ChainId.ETHEREUM,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.GNOSIS,
  ChainId.FANTOM,
  ChainId.BSC,
  ChainId.ARBITRUM_NOVA,
  ChainId.POLYGON,
]

export const SUPPORTED_CHAIN_IDS: ChainId[] = Array.from(
  new Set([...AMM_ENABLED_NETWORKS, ...TRIDENT_ENABLED_NETWORKS, ...V3_SUPPORTED_CHAIN_IDS])
)
