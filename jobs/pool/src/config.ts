import { ChainId } from '@sushiswap/chain'

export const MASTERCHEF_V1_SUBGRAPH_NAME = 'jiro-ono/masterchef-staging'
export const MASTERCHEF_V2_SUBGRAPH_NAME = 'sushiswap/master-chefv2'

export const MINICHEF_ADDRESS: Record<number | string, string> = {
  [ChainId.POLYGON]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.GNOSIS]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.ARBITRUM]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.FANTOM]: '0xf731202A3cf7EfA9368C2d7bD613926f7A144dB5',
  [ChainId.ARBITRUM_NOVA]: '0xC09756432dAD2FF50B2D40618f7B04546DD20043',
  [ChainId.OPTIMISM]: '0xB25157bF349295a7Cd31D1751973f426182070D6',
  [ChainId.AVALANCHE]: '0xe11252176CEDd4a493Aec9767192C06A04A6B04F',
  [ChainId.BSC]: '0x5219C5E32b9FFf87F29d5A833832c29134464aaa',
}

export const MASTERCHEF_ADDRESS: Record<number | string, string> = {
  [ChainId.ETHEREUM]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  [ChainId.GÖRLI]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
}

export const MASTERCHEF_V2_ADDRESS: Record<number | string, string> = {
  [ChainId.ETHEREUM]: '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d',
}
