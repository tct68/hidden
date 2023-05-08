import type { MultiRoute, RouteLeg, RPool } from '@sushiswap/tines'
import type { BigNumber } from 'ethers'

import { LiquidityProviders } from '../liquidity-providers'

// RPool extention for RP coding
export abstract class PoolCode {
  pool: RPool
  liquidityProvider: LiquidityProviders
  poolName: string

  constructor(pool: RPool, liquidityProvider: LiquidityProviders, poolName: string) {
    this.pool = pool
    this.liquidityProvider = liquidityProvider
    this.poolName = poolName
  }

  static RouteProcessorAddress = 'RouteProcessor'

  // the address where should be swap amount of liquidity before the swap
  // returns RouteProcessorAddress if it is a RouteProcessor
  getStartPoint(_leg: RouteLeg, _route: MultiRoute): string {
    return this.pool.address
  }

  abstract getSwapCodeForRouteProcessor(leg: RouteLeg, route: MultiRoute, to: string, exactAmount?: BigNumber): string

  getSwapCodeForRouteProcessor2(_leg: RouteLeg, _route: MultiRoute, _to: string): string {
    return 'unimplemented'
  }
}
