import { ChainId } from '@sushiswap/chain'

import { GRAPH_HOST_ENDPOINT } from '../../config.js'

export const GRAPH_HOST: Record<number | string, string> = {
  [ChainId.AVALANCHE]: GRAPH_HOST_ENDPOINT,
  [ChainId.POLYGON]: GRAPH_HOST_ENDPOINT,
  [ChainId.FANTOM]: GRAPH_HOST_ENDPOINT,
  [ChainId.GNOSIS]: GRAPH_HOST_ENDPOINT,
  [ChainId.BSC]: GRAPH_HOST_ENDPOINT,
  [ChainId.ETHEREUM]: GRAPH_HOST_ENDPOINT,
  [ChainId.ARBITRUM]: GRAPH_HOST_ENDPOINT,
  [ChainId.OPTIMISM]: GRAPH_HOST_ENDPOINT,
}
export const ELK_V2_SUPPORTED_CHAINS = [
  ChainId.POLYGON,
  ChainId.AVALANCHE,
  ChainId.FANTOM,
  ChainId.GNOSIS,
  ChainId.BSC,
  ChainId.ETHEREUM,
  ChainId.ARBITRUM,
  ChainId.OPTIMISM,
]
export const ELK_V2_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.POLYGON]: 'elkfinance/elkdex-matic',
  [ChainId.AVALANCHE]: 'elkfinance/elkdex-avax',
  [ChainId.FANTOM]: 'elkfinance/elkdex-ftm',
  [ChainId.GNOSIS]: 'elkfinance/elkdex-xdai',
  [ChainId.BSC]: 'elkfinance/elkdex-bsc',
  [ChainId.ETHEREUM]: 'elkfinance/elkdex-eth',
  [ChainId.ARBITRUM]: 'elkfinance/elkdex-arbitrum',
  [ChainId.OPTIMISM]: 'elkfinance/elkdex-optimism',
}
