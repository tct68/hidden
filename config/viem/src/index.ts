import { ChainId } from '@sushiswap/chain'
import { Address, fallback, http, PublicClientConfig } from 'viem'
import {
  arbitrum,
  // arbitrumGoerli,
  // aurora,
  // auroraGoerli,
  avalanche,
  //  avalancheFuji,
  // bronos,
  // bronosTestnet,
  bsc,
  // bscTestnet,
  // canto,
  celo,
  // celoAlfajores,
  // crossbell,
  // evmos,
  //  evmosTestnet,
  fantom,
  // fantomTestnet,
  // filecoin,
  // filecoinTestnet,
  // foundry,
  // goerli,
  gnosis as _gnosis,
  // gnosisChiado,
  // hardhat,
  // iotex,
  // iotexTestnet,
  // localhost,
  mainnet,
  metis as _metis,
  // metisGoerli,
  optimism,
  //  optimismGoerli,
  polygon,
  // polygonMumbai,
  // sepolia,
  //  taraxa,
  // taraxaTestnet,
  //  zkSync,
  // zkSyncTestnet,
} from 'viem/chains'

export {
  arbitrum,
  // arbitrumGoerli,
  // aurora,
  // auroraGoerli,
  avalanche,
  //  avalancheFuji,
  // bronos,
  // bronosTestnet,
  bsc,
  // bscTestnet,
  // canto,
  celo,
  // celoAlfajores,
  // crossbell,
  // evmos,
  //  evmosTestnet,
  fantom,
  // fantomTestnet,
  // filecoin,
  // filecoinTestnet,
  // foundry,
  // goerli,
  // gnosis,
  // gnosisChiado,
  // hardhat,
  // iotex,
  // iotexTestnet,
  // localhost,
  mainnet,
  optimism,
  polygon,
}

export const gnosis = {
  ..._gnosis,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11' as Address,
      blockCreated: 21022491,
    },
  },
}

export const metis = {
  ..._metis,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11' as Address,
      blockCreated: 2338552,
    },
  },
}

export const arbitrumNova = {
  id: ChainId.ARBITRUM_NOVA,
  name: 'Arbitrum Nova',
  network: 'arbitrumnova',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://nova.arbitrum.io/rpc'],
    },
    public: {
      http: ['https://nova.arbitrum.io/rpc'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Arbitrum Nova Chain Explorer',
      url: 'https://nova-explorer.arbitrum.io/',
    },
    default: {
      name: 'Arbitrum Nova Chain Explorer',
      url: 'https://nova-explorer.arbitrum.io/',
    },
  },
  contracts: {
    multicall3: {
      address: '0x4d81f45fcde2B1C9A93Bde5495dc3553bbEC8EFa' as Address,
      blockCreated: 400008,
    },
  },
} as const

const alchemyId = process.env['ALCHEMY_ID'] || process.env['NEXT_PUBLIC_ALCHEMY_ID']

export const config: Record<number, PublicClientConfig> = {
  [ChainId.ARBITRUM_NOVA]: {
    chain: arbitrumNova,
    transport: http(arbitrumNova.rpcUrls.default.http[0]),
  },
  [ChainId.ARBITRUM]: {
    chain: arbitrum,
    transport: fallback([http(`${arbitrum.rpcUrls.alchemy.http}/${alchemyId}`), http('https://rpc.ankr.com/arbitrum')]),
  },
  [ChainId.AVALANCHE]: {
    chain: avalanche,
    transport: fallback([http(avalanche.rpcUrls.default.http[0]), http('https://rpc.ankr.com/avalanche')]),
  },
  [ChainId.BSC]: {
    chain: bsc,
    transport: fallback([
      http(bsc.rpcUrls.default.http[0]),
      http('https://bsc-dataseed.binance.org'),
      http('https://bsc-dataseed1.binance.org'),
      http('https://bsc-dataseed2.binance.org'),
    ]),
  },
  [ChainId.ETHEREUM]: {
    chain: mainnet,
    transport: fallback([http(`${mainnet.rpcUrls.alchemy.http}/${alchemyId}`), http('https://eth.llamarpc.com')]),
  },
  [ChainId.FANTOM]: {
    chain: fantom,
    transport: fallback([
      http(fantom.rpcUrls.default.http[0]),
      http('https://rpc.fantom.network'),
      http('https://rpc2.fantom.network'),
    ]),
  },
  [ChainId.GNOSIS]: {
    chain: gnosis,
    transport: fallback([http(gnosis.rpcUrls.default.http[0]), http('https://rpc.ankr.com/gnosis')]),
  },
  [ChainId.OPTIMISM]: {
    chain: optimism,
    transport: fallback([http(`${optimism.rpcUrls.alchemy.http}/${alchemyId}`), http('https://rpc.ankr.com/optimism')]),
  },
  [ChainId.POLYGON]: {
    chain: polygon,
    transport: fallback([http(`${polygon.rpcUrls.alchemy.http}/${alchemyId}`), http('https://polygon.llamarpc.com')]),
  },
} as const
