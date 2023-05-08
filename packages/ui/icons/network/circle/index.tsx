import { ChainId } from '@sushiswap/chain'
import * as React from 'react'

import { ArbitrumCircle } from './ArbitrumCircle'
import { ArbitrumNovaCircle } from './ArbitrumNovaCircle'
import { AvalancheCircle } from './AvalancheCircle'
import { BinanceCircle } from './BinanceCircle'
import { EthereumCircle } from './EthereumCircle'
import { FantomCircle } from './FantomCircle'
import { GnosisCircle } from './GnosisCircle'
import { OptimismCircle } from './OptimismCircle'
import { PolygonCircle } from './PolygonCircle'

export * from './ArbitrumCircle'
export * from './ArbitrumNovaCircle'
export * from './AvalancheCircle'
export * from './BinanceCircle'
export * from './EthereumCircle'
export * from './FantomCircle'
export * from './GnosisCircle'
export * from './OptimismCircle'
export * from './PolygonCircle'

export const NETWORK_CIRCLE_ICON: Record<number, (props: React.ComponentProps<'svg'>) => JSX.Element> = {
  [ChainId.ETHEREUM]: EthereumCircle,
  [ChainId.FANTOM]: FantomCircle,
  [ChainId.POLYGON]: PolygonCircle,
  [ChainId.GNOSIS]: GnosisCircle,
  [ChainId.BSC]: BinanceCircle,
  [ChainId.ARBITRUM]: ArbitrumCircle,
  [ChainId.AVALANCHE]: AvalancheCircle,
  [ChainId.OPTIMISM]: OptimismCircle,
  [ChainId.ARBITRUM_NOVA]: ArbitrumNovaCircle,
}
