import { ChainId } from '@sushiswap/chain'

export const nativeCurrencyIds = {
  [ChainId.ETHEREUM]: 'ETH',
  [ChainId.GÖRLI]: 'ETH',
  [ChainId.POLYGON]: 'MATIC',
  [ChainId.POLYGON_TESTNET]: 'MATIC',
  [ChainId.FANTOM]: 'FTM',
  [ChainId.FANTOM_TESTNET]: 'FTM',
  [ChainId.GNOSIS]: 'XDAI',
  [ChainId.BSC]: 'BNB',
  [ChainId.BSC_TESTNET]: 'BNB',
  [ChainId.ARBITRUM]: 'ETH',
  [ChainId.ARBITRUM_NOVA]: 'ETH',
  [ChainId.ARBITRUM_TESTNET]: 'ETH',
  [ChainId.AVALANCHE]: 'AVAX',
  [ChainId.AVALANCHE_TESTNET]: 'AVAX',
  [ChainId.OPTIMISM]: 'ETH',
  [ChainId.CONSENSUS_ZKEVM_TESTNET]: 'ETH',
  [ChainId.SCROLL_ALPHA_TESTNET]: 'ETH',
  [ChainId.BASE_TESTNET]: 'ETH'
} as const
