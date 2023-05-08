import { ChainId, ChainKey } from '@sushiswap/chain'
import { FURO_SUBGRAPH_NAME } from '@sushiswap/graph-config'

export const WETH_MAKER_SUPPORTED_CHAINS = [
  ChainId.ETHEREUM,
  ChainId.POLYGON,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
] as const

export const MAKER_SUPPORTED_CHAIN_NAMES = [
  ChainKey.ETHEREUM,
  ChainKey.FANTOM,
  ChainKey.POLYGON,
  ChainKey.GNOSIS,
  ChainKey.BSC,
  ChainKey.ARBITRUM,
  ChainKey.AVALANCHE,
] as const

export const REVENUES_SUPPORTED_CHAIN_NAMES = [
  ChainKey.ETHEREUM,
  ChainKey.OPTIMISM,
  ChainKey.GNOSIS,
  ChainKey.POLYGON,
  ChainKey.ARBITRUM,
  ChainKey.BSC,
  ChainKey.AVALANCHE,
  ChainKey.FANTOM,
] as const

export const FURO_SUPPORTED_CHAIN_NAMES = Object.keys(FURO_SUBGRAPH_NAME)
  .filter((key) => {
    return Number(key) !== ChainId.GÖRLI
  })
  .map((key) => ChainId[Number(key)].toLowerCase())

export const CHAIN_NAME_TO_CHAIN_ID = {
  [ChainKey.ETHEREUM]: ChainId.ETHEREUM,
  [ChainKey.FANTOM]: ChainId.FANTOM,
  [ChainKey.POLYGON]: ChainId.POLYGON,
  [ChainKey.GNOSIS]: ChainId.GNOSIS,
  [ChainKey.BSC]: ChainId.BSC,
  [ChainKey.ARBITRUM]: ChainId.ARBITRUM,
  [ChainKey.AVALANCHE]: ChainId.AVALANCHE,
} as const

export const MAKER_TYPE = {
  [ChainId.ETHEREUM]: 'SushiMaker',
  [ChainId.FANTOM]: 'Safe',
  [ChainId.POLYGON]: 'WethMaker',
  [ChainId.GNOSIS]: 'Safe',
  [ChainId.BSC]: 'Safe',
  [ChainId.ARBITRUM]: 'WethMaker',
  [ChainId.AVALANCHE]: 'WethMaker',
} as const

export const MAKER_ADDRESS = {
  [ChainId.ETHEREUM]: '0x5ad6211cd3fde39a9cecb5df6f380b8263d1e277',
  [ChainId.FANTOM]: '0xf9e7d4c6d36ca311566f46c81e572102a2dc9f52',
  [ChainId.POLYGON]: '0xf1c9881be22ebf108b8927c4d197d126346b5036',
  [ChainId.GNOSIS]: '0xc375411c6597f692add6a7a3ad5b3c38626b0f26',
  [ChainId.BSC]: '0xc6fd91ad4919fd91e2c84077ba648092cb499638',
  [ChainId.ARBITRUM]: '0xa19b3b22f29e23e4c04678c94cfc3e8f202137d8',
  [ChainId.AVALANCHE]: '0x560c759a11cd026405f6f2e19c65da1181995fa2',
} as const

export const GRAPH_HOST = 'api.thegraph.com/subgraphs/name'
export const PENDING_GRAPH_HOST = 'api.thegraph.com/subgraphs/id'
export const METIS_GRAPH_HOST = 'https://andromeda.thegraph.metis.io/subgraphs/name'

export const SUBGRAPH_HOST = {
  [ChainId.ARBITRUM]: GRAPH_HOST,
  [ChainId.AVALANCHE]: GRAPH_HOST,
  [ChainId.BSC]: GRAPH_HOST,
  [ChainId.ETHEREUM]: GRAPH_HOST,
  [ChainId.FANTOM]: GRAPH_HOST,
  [ChainId.GNOSIS]: GRAPH_HOST,
  [ChainId.GÖRLI]: GRAPH_HOST,
  [ChainId.OPTIMISM]: GRAPH_HOST,
  [ChainId.POLYGON]: GRAPH_HOST,
} as const

export const EXCHANGE_SUBGRAPH_NAME = {
  [ChainId.ARBITRUM]: 'sushiswap/exchange-arbitrum-backup',
  [ChainId.AVALANCHE]: 'sushiswap/exchange-avalanche',
  [ChainId.BSC]: 'sushiswap/bsc-exchange',
  [ChainId.ETHEREUM]: 'sushiswap/exchange',
  [ChainId.FANTOM]: 'sushiswap/exchange-fantom',
  [ChainId.GNOSIS]: 'sushiswap/exchange-gnosis',
  [ChainId.POLYGON]: 'sushiswap/matic-exchange',
} as const

export const TRIDENT_SUBGRAPH_NAME = {
  [ChainId.POLYGON]: 'sushi-v2/trident-polygon',
  [ChainId.OPTIMISM]: 'sushi-qa/trident-optimism',
} as const
