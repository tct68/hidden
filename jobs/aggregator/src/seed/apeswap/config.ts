import { ChainId } from '@sushiswap/chain'

import { GRAPH_HOST_ENDPOINT } from '../../config.js'

export const GRAPH_HOST: Record<number | string, string> = {
  [ChainId.POLYGON]: GRAPH_HOST_ENDPOINT,
}
export const APESWAP_V2_SUPPORTED_CHAINS = [
  ChainId.POLYGON,
  ChainId.BSC,
]

export const APESWAP_V2_SUBGRAPH_NAME: Record<number | string, string> = {
  // [ChainId.ETHEREUM]: 'messari/apeswap-ethereum',
  [ChainId.POLYGON]: 'messari/apeswap-polygon',
  [ChainId.BSC]: 'messari/apeswap-bsc',
}
