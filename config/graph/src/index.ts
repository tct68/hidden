import { ChainId } from '@sushiswap/chain'

export const TRIDENT_ENABLED_NETWORKS = [
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC,
] as const

export type TridentChainId = (typeof TRIDENT_ENABLED_NETWORKS)[number]

export const SUSHISWAP_ENABLED_NETWORKS = [
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC,
  ChainId.ETHEREUM,
  ChainId.FANTOM,
  ChainId.GNOSIS,
  ChainId.POLYGON,
  ChainId.ARBITRUM_NOVA,
] as const

export type SushiSwapChainId = (typeof SUSHISWAP_ENABLED_NETWORKS)[number]

export const SUSHISWAP_V3_ENABLED_NETWORKS = [
  ChainId.ETHEREUM,
  ChainId.ARBITRUM_NOVA,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC,
  ChainId.FANTOM,
  ChainId.GNOSIS,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
]
export type SushiSwapV3ChainId = (typeof SUSHISWAP_V3_ENABLED_NETWORKS)[number]

export const SWAP_ENABLED_NETWORKS = Array.from(
  new Set([...SUSHISWAP_ENABLED_NETWORKS, ...SUSHISWAP_V3_ENABLED_NETWORKS, ...TRIDENT_ENABLED_NETWORKS])
)

export type SwapSupportedChainIds = typeof SWAP_ENABLED_NETWORKS
export type SwapSupportedChainId = SwapSupportedChainIds[number]

export const GRAPH_HOST = 'api.thegraph.com/subgraphs/name'
export const PENDING_GRAPH_HOST = 'api.thegraph.com/subgraphs/id'

export const METIS_HOST = 'andromeda.thegraph.metis.io/subgraphs/name'
export const PENDING_METIS_HOST = 'andromeda.thegraph.metis.io/subgraphs/id'

export const POLYGON_ZKEVM_HOST = 'api.studio.thegraph.com/query/32073'


export const CHAIN_NAME: Record<number, string> = {
  [ChainId.ARBITRUM]: 'Arbitrum',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.BSC]: 'Bsc',
  [ChainId.ETHEREUM]: 'Ethereum',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.GNOSIS]: 'Gnosis',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.OPTIMISM]: 'Optimism',
  [ChainId.POLYGON]: 'Polygon',
  [ChainId.ARBITRUM_NOVA]: 'Arbitrum Nova',
} as const

export const SUBGRAPH_HOST = {
  [ChainId.ARBITRUM]: GRAPH_HOST,
  [ChainId.ARBITRUM_NOVA]: 'subgraphs.sushi.com/subgraphs/name',
  [ChainId.AVALANCHE]: GRAPH_HOST,
  [ChainId.BSC]: GRAPH_HOST,
  [ChainId.ETHEREUM]: GRAPH_HOST,
  [ChainId.FANTOM]: GRAPH_HOST,
  [ChainId.GNOSIS]: GRAPH_HOST,
  [ChainId.GÖRLI]: GRAPH_HOST,
  [ChainId.OPTIMISM]: 'api.thegraph.com/subgraphs/name',
  [ChainId.POLYGON]: GRAPH_HOST,
} as const

export const BENTOBOX_SUBGRAPH_NAME = {
  [ChainId.ETHEREUM]: 'sushiswap/bentobox-ethereum',
  [ChainId.POLYGON]: 'sushiswap/bentobox-polygon',
  [ChainId.AVALANCHE]: 'sushiswap/bentobox-avalanche',
  [ChainId.BSC]: 'sushiswap/bentobox-bsc',
  [ChainId.FANTOM]: 'sushiswap/bentobox-fantom',
  [ChainId.GNOSIS]: 'sushiswap/bentobox-gnosis',
  [ChainId.ARBITRUM]: 'sushiswap/bentobox-arbitrum',
  [ChainId.OPTIMISM]: 'sushiswap/bentobox-optimism',
} as const

export type BentoBoxChainId = keyof typeof BENTOBOX_SUBGRAPH_NAME

export const BLOCKS_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.ETHEREUM]: 'blocklytics/ethereum-blocks',
  [ChainId.GNOSIS]: 'matthewlilley/xdai-blocks',
  [ChainId.POLYGON]: 'matthewlilley/polygon-blocks',
  [ChainId.FANTOM]: 'matthewlilley/fantom-blocks',
  [ChainId.BSC]: 'matthewlilley/bsc-blocks',
  [ChainId.AVALANCHE]: 'matthewlilley/avalanche-blocks',
  [ChainId.ARBITRUM]: 'sushiswap/arbitrum-blocks',
  [ChainId.OPTIMISM]: 'beethovenxfi/optimism-blocks',
  [ChainId.ARBITRUM_NOVA]: 'sushiswap/blocks-arbitrum-nova',
} as const

export const EXCHANGE_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.AVALANCHE]: 'sushiswap/exchange-avalanche',
  [ChainId.ARBITRUM]: 'sushiswap/exchange-arbitrum-backup',
  [ChainId.BSC]: 'sushiswap/bsc-exchange',
  [ChainId.ETHEREUM]: 'sushiswap/exchange-ethereum',
  [ChainId.FANTOM]: 'sushiswap/exchange-fantom',
  [ChainId.GNOSIS]: 'sushiswap/xdai-exchange',
  [ChainId.POLYGON]: 'sushiswap/matic-exchange',
  [ChainId.ARBITRUM_NOVA]: 'sushi-0m/sushiswap-arbitrum-nova',
  [ChainId.POLYGON]: 'sushiswap/exchange-polygon',
} as const

export const SUSHISWAP_SUBGRAPH_NAME = {
  [ChainId.ETHEREUM]: 'sushi-v2/sushiswap-ethereum',
  [ChainId.AVALANCHE]: 'sushi-v2/sushiswap-avalanche',
  [ChainId.ARBITRUM]: 'sushi-v2/sushiswap-arbitrum',
  [ChainId.BSC]: 'sushi-v2/sushiswap-bsc',
  [ChainId.FANTOM]: 'sushi-v2/sushiswap-fantom',
  [ChainId.GNOSIS]: 'sushi-v2/sushiswap-gnosis',
  [ChainId.ARBITRUM_NOVA]: 'sushi-0m/sushiswap-arbitrum-nova',
  [ChainId.POLYGON]: 'sushi-v2/sushiswap-polygon',
} as const

export const SUSHISWAP_V3_SUBGRAPH_NAME = {
  [ChainId.ARBITRUM_NOVA]: 'sushi-v3/v3-arbitrum-nova',
  [ChainId.ARBITRUM]: 'sushi-v3/v3-arbitrum',
  [ChainId.AVALANCHE]: 'sushi-v3/v3-avalanche',
  [ChainId.BSC]: 'sushi-v3/v3-bsc',
  [ChainId.ETHEREUM]: 'sushi-v3/v3-ethereum',
  [ChainId.FANTOM]: 'sushi-v3/v3-fantom',
  [ChainId.GNOSIS]: 'sushi-v3/v3-gnosis',
  [ChainId.OPTIMISM]: 'sushi-v3/v3-optimism',
  [ChainId.POLYGON]: 'sushi-v3/v3-polygon',
}

export const TRIDENT_SUBGRAPH_NAME = {
  [ChainId.POLYGON]: 'sushi-v2/trident-polygon',
  [ChainId.OPTIMISM]: 'sushi-v2/trident-optimism',
  [ChainId.ARBITRUM]: 'sushi-v2/trident-arbitrum',
  [ChainId.BSC]: 'sushi-v2/trident-bsc',
  [ChainId.AVALANCHE]: 'sushi-v2/trident-avalanche',
} as const

export const TRIDENT_SUBGRAPH_START_BLOCK: Record<keyof typeof TRIDENT_SUBGRAPH_NAME, number> = {
  [ChainId.POLYGON]: 34188953,
  [ChainId.OPTIMISM]: 7464195,
  [ChainId.ARBITRUM]: 43756724,
  [ChainId.BSC]: 23136876,
  [ChainId.AVALANCHE]: 22495996,
} as const

export const MINICHEF_SUBGRAPH_NAME = {
  [ChainId.POLYGON]: 'jiro-ono/minichef-staging-updates', // new trident subgraph not synced yet
  [ChainId.GNOSIS]: 'jiro-ono/gnosis-minichef-staging',
  // [ChainId.HARMONY]: 'sushiswap/harmony-minichef', // subgraph broken
  [ChainId.ARBITRUM]: 'jiro-ono/arbitrum-minichef-staging',
  [ChainId.FANTOM]: 'sushiswap/fantom-minichef',
  [ChainId.ARBITRUM_NOVA]: 'sushiswap/minichef-arbitrum-nova',
  [ChainId.OPTIMISM]: 'sushiswap/minichef-optimism',
  [ChainId.AVALANCHE]: 'sushiswap/minichef-avalanche',
  [ChainId.BSC]: 'sushiswap/minichef-bsc',
} as const

export const MASTERCHEF_V1_SUBGRAPH_NAME = 'jiro-ono/masterchef-staging' as const
export const MASTERCHEF_V2_SUBGRAPH_NAME = 'sushiswap/master-chefv2' as const

export const FURO_SUBGRAPH_NAME: Record<string, string> = {
  [ChainId.ETHEREUM]: 'sushi-subgraphs/furo-ethereum',
  [ChainId.GÖRLI]: 'sushi-subgraphs/furo-goerli',
  [ChainId.ARBITRUM]: 'sushi-subgraphs/furo-arbitrum',
  [ChainId.AVALANCHE]: 'sushi-subgraphs/furo-avalanche',
  [ChainId.BSC]: 'sushi-subgraphs/furo-bsc',
  [ChainId.FANTOM]: 'sushi-subgraphs/furo-fantom',
  [ChainId.GNOSIS]: 'sushi-subgraphs/furo-gnosis',
  [ChainId.OPTIMISM]: 'sushi-subgraphs/furo-optimism',
  [ChainId.POLYGON]: 'sushi-subgraphs/furo-polygon',
} as const

export const KASHI_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.ARBITRUM]: 'sushiswap/kashi-arbitrum',
} as const

export const CONCENTRATED_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.ETHEREUM]: 'uniswap/uniswap-v3',
  [ChainId.ARBITRUM]: 'ianlapham/arbitrum-minimal',
}

export const DEFAULT_CHAIN_ID = ChainId.ETHEREUM
export const DEFAULT_CHAIN_NAME = CHAIN_NAME[DEFAULT_CHAIN_ID]
