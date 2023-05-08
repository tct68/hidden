import { ChainId } from '@sushiswap/chain'
import React from 'react'

import { ArbitrumNaked } from './ArbitrumNaked'
import { ArbitrumNovaNaked } from './ArbitrumNovaNaked'
import { AvalancheNaked } from './AvalancheNaked'
import { BinanceNaked } from './BinanceNaked'
import { EthereumNaked } from './EthereumNaked'
import { FantomNaked } from './FantomNaked'
import { GnosisNaked } from './GnosisNaked'
import { OptimismNaked } from './OptimismNaked'
import { PolygonNaked } from './PolygonNaked'

export * from './ArbitrumNaked'
export * from './ArbitrumNovaNaked'
export * from './AvalancheNaked'
export * from './BinanceNaked'
export * from './EthereumNaked'
export * from './FantomNaked'
export * from './GnosisNaked'
export * from './OptimismNaked'
export * from './PolygonNaked'

export const NETWORK_NAKED_ICON: Record<number, (props: React.ComponentProps<'svg'>) => JSX.Element> = {
  [ChainId.ETHEREUM]: EthereumNaked,
  [ChainId.FANTOM]: FantomNaked,
  [ChainId.POLYGON]: PolygonNaked,
  [ChainId.GNOSIS]: GnosisNaked,
  [ChainId.BSC]: BinanceNaked,
  [ChainId.ARBITRUM]: ArbitrumNaked,
  [ChainId.AVALANCHE]: AvalancheNaked,
  [ChainId.OPTIMISM]: OptimismNaked,
  [ChainId.ARBITRUM_NOVA]: ArbitrumNovaNaked,
}
