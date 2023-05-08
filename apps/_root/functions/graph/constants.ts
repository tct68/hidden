import { ChainId } from '@sushiswap/core-sdk'

const THE_GRAPH = 'https://api.thegraph.com'

export const GRAPH_HOST = {
  [ChainId.ETHEREUM]: THE_GRAPH,
  [ChainId.XDAI]: THE_GRAPH,
  [ChainId.MATIC]: THE_GRAPH,
  [ChainId.FANTOM]: THE_GRAPH,
  [ChainId.BSC]: THE_GRAPH,
  [ChainId.AVALANCHE]: THE_GRAPH,
  [ChainId.ARBITRUM]: THE_GRAPH,
}

export const TRIDENT = {
  [ChainId.MATIC]: 'matthewlilley/trident-polygon',
}
