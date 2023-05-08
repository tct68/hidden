import { ChainId } from '@sushiswap/chain'

import { ARB, BUSD, GNO, OP, SUSHI, WETH9 } from './constants'

export const defaultQuoteCurrency = {
  [ChainId.ETHEREUM]: SUSHI[ChainId.ETHEREUM],
  [ChainId.GÖRLI]: SUSHI[ChainId.GÖRLI],
  [ChainId.POLYGON]: SUSHI[ChainId.POLYGON],
  [ChainId.FANTOM]: SUSHI[ChainId.FANTOM],
  [ChainId.GNOSIS]: GNO[ChainId.GNOSIS],
  [ChainId.BSC]: BUSD[ChainId.BSC],
  [ChainId.ARBITRUM]: ARB[ChainId.ARBITRUM],
  [ChainId.ARBITRUM_NOVA]: ARB[ChainId.ARBITRUM_NOVA],
  [ChainId.AVALANCHE]: SUSHI[ChainId.AVALANCHE],
  [ChainId.OPTIMISM]: OP[ChainId.OPTIMISM],
  [ChainId.CONSENSUS_ZKEVM_TESTNET]: WETH9[ChainId.CONSENSUS_ZKEVM_TESTNET],
  [ChainId.SCROLL_ALPHA_TESTNET]: WETH9[ChainId.SCROLL_ALPHA_TESTNET],
  [ChainId.BASE_TESTNET]: WETH9[ChainId.BASE_TESTNET],
} as const
