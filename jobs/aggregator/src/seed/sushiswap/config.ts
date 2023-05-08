import { ChainId } from "@sushiswap/chain"

import { GRAPH_HOST_ENDPOINT, SUSHI_HOST_ENDPOINT } from "../../config.js"

export const GRAPH_HOST: Record<number | string, string> = {
    [ChainId.OPTIMISM]: GRAPH_HOST_ENDPOINT,
    [ChainId.ETHEREUM]: GRAPH_HOST_ENDPOINT,
    [ChainId.AVALANCHE]: GRAPH_HOST_ENDPOINT,
    [ChainId.ARBITRUM]: GRAPH_HOST_ENDPOINT,
    [ChainId.BSC]: GRAPH_HOST_ENDPOINT,
    [ChainId.FANTOM]: GRAPH_HOST_ENDPOINT,
    [ChainId.GNOSIS]: GRAPH_HOST_ENDPOINT,
    [ChainId.POLYGON]: GRAPH_HOST_ENDPOINT,
    [ChainId.ARBITRUM_NOVA]: SUSHI_HOST_ENDPOINT,
  }
  
  // SUSHISWAP
  export const SUSHISWAP_CHAINS = [
    ChainId.ARBITRUM,
    ChainId.AVALANCHE,
    ChainId.BSC,
    ChainId.ETHEREUM,
    ChainId.FANTOM,
    ChainId.GNOSIS,
    ChainId.POLYGON,
    ChainId.ARBITRUM_NOVA,
  ]
  
  export const TRIDENT_CHAINS = [
    ChainId.POLYGON,
    ChainId.OPTIMISM,
    ChainId.ARBITRUM,
    ChainId.AVALANCHE,
    ChainId.BSC,
  ]
  
  export const LEGACY_SUBGRAPH_NAME: Record<number | string, string> = {
    [ChainId.ETHEREUM]: 'sushi-v2/sushiswap-ethereum',
    [ChainId.AVALANCHE]: 'sushi-v2/sushiswap-avalanche',
    [ChainId.ARBITRUM]: 'sushi-v2/sushiswap-arbitrum',
    [ChainId.BSC]: 'sushi-v2/sushiswap-bsc',
    [ChainId.FANTOM]: 'sushi-v2/sushiswap-fantom',
    [ChainId.GNOSIS]: 'sushi-v2/sushiswap-gnosis',
    [ChainId.POLYGON]: 'sushi-v2/sushiswap-polygon',
    [ChainId.ARBITRUM_NOVA]: 'sushi-0m/sushiswap-arbitrum-nova',
  }
  
  export const TRIDENT_SUBGRAPH_NAME: Record<number | string, string> = {
    [ChainId.POLYGON]: 'sushi-v2/trident-polygon',
    [ChainId.OPTIMISM]: 'sushi-v2/trident-optimism',
    [ChainId.ARBITRUM]: 'sushi-v2/trident-arbitrum',
    [ChainId.AVALANCHE]: 'sushi-v2/trident-avalanche',
    [ChainId.BSC]: 'sushi-v2/trident-bsc',
  }
  
  export const SUSHI_SUPPORTED_CHAINS = Array.from(new Set([...SUSHISWAP_CHAINS, ...TRIDENT_CHAINS]))