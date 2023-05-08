import { ChainId } from '@sushiswap/chain'
import { PrismaClient } from '@sushiswap/database'
import { PublicClient } from 'viem'

import { LiquidityProviders } from './LiquidityProvider'
import { UniswapV2BaseProvider } from './UniswapV2Base'

export class ElkProvider extends UniswapV2BaseProvider {

  constructor(chainId: ChainId, web3Client: PublicClient, databaseClient?: PrismaClient) {
    const factory = {
      [ChainId.AVALANCHE]: '0x091d35d7F63487909C863001ddCA481c6De47091',
      [ChainId.POLYGON]: '0xE3BD06c7ac7E1CeB17BdD2E5BA83E40D1515AF2a',
      [ChainId.FANTOM]: '0x7Ba73c99e6f01a37f3e33854c8F544BbbadD3420',
      [ChainId.GNOSIS]: '0xCB018587dA9590A18f49fFE2b85314c33aF3Ad3B',
      [ChainId.BSC]: '0x31aFfd875e9f68cd6Cd12Cee8943566c9A4bBA13',
      [ChainId.ETHEREUM]: '0x6511eBA915fC1b94b2364289CCa2b27AE5898d80',
      [ChainId.ARBITRUM]: '0xA59B2044EAFD15ee4deF138D410d764c9023E1F0',
      [ChainId.OPTIMISM]: '0xedfad3a0F42A8920B011bb0332aDe632e552d846',
    } as const
    const initCodeHash = {
      [ChainId.AVALANCHE]: '0x84845e7ccb283dec564acfcd3d9287a491dec6d675705545a2ab8be22ad78f31',
      [ChainId.POLYGON]: '0x84845e7ccb283dec564acfcd3d9287a491dec6d675705545a2ab8be22ad78f31',
      [ChainId.FANTOM]: '0x84845e7ccb283dec564acfcd3d9287a491dec6d675705545a2ab8be22ad78f31',
      [ChainId.GNOSIS]: '0x84845e7ccb283dec564acfcd3d9287a491dec6d675705545a2ab8be22ad78f31',
      [ChainId.BSC]: '0x84845e7ccb283dec564acfcd3d9287a491dec6d675705545a2ab8be22ad78f31',
      [ChainId.ETHEREUM]: '0x84845e7ccb283dec564acfcd3d9287a491dec6d675705545a2ab8be22ad78f31',
      [ChainId.ARBITRUM]: '0x84845e7ccb283dec564acfcd3d9287a491dec6d675705545a2ab8be22ad78f31',
      [ChainId.OPTIMISM]: '0x84845e7ccb283dec564acfcd3d9287a491dec6d675705545a2ab8be22ad78f31',
    } as const
    super(chainId, web3Client, factory, initCodeHash, databaseClient)
  }
  getType(): LiquidityProviders {
    return LiquidityProviders.Elk
  }
  getPoolProviderName(): string {
    return 'Elk'
  }
}
