import { ChainId } from '@sushiswap/chain'
import type { Chain } from '@wagmi/core'
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  foundry,
  goerli,
  hardhat,
  localhost,
  mainnet,
  optimism,
  polygon,
  polygonZkEvm,
} from '@wagmi/core/chains'

export const defaultChains: Chain[] = [
  arbitrum,
  // arbitrumGoerli,
  avalanche,
  // avalancheFuji,
  bsc,
  // bscTestnet,
  fantom,
  // fantomTestnet,
  foundry,
  goerli,
  hardhat,
  localhost,
  mainnet,
  optimism,
  // optimismGoerli,
  polygon,
  // polygonMumbai,
  // sepolia,
]

export const otherChains: Chain[] = [
  {
    id: ChainId.AVALANCHE,
    name: 'Avalanche',
    network: 'avalanche',
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://api.avax.network/ext/bc/C/rpc'],
      },
      public: {
        http: ['https://api.avax.network/ext/bc/C/rpc'],
      },
    },
    blockExplorers: {
      etherscan: {
        name: 'Snowtrace',
        url: 'https://snowtrace.io/',
      },
      default: {
        name: 'Snowtrace',
        url: 'https://snowtrace.io/',
      },
    },
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 11907934,
      },
    },
  },
  {
    id: ChainId.BSC,
    name: 'Binance Smart Chain',
    network: 'bsc',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://bsc-dataseed1.binance.org'],
      },
      public: {
        http: ['https://bsc-dataseed1.binance.org'],
      },
    },
    blockExplorers: {
      etherscan: {
        name: 'Bscscan',
        url: 'https://bscscan.com',
      },
      default: {
        name: 'Bscscan',
        url: 'https://bscscan.com',
      },
    },
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 15921452,
      },
    },
  },
  {
    id: ChainId.FANTOM,
    name: 'Fantom',
    network: 'fantom',
    nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://rpcapi.fantom.network'],
      },
      public: {
        http: ['https://rpcapi.fantom.network'],
      },
    },
    blockExplorers: {
      etherscan: {
        name: 'Fantomscan',
        url: 'https://ftmscan.com',
      },
      default: {
        name: 'Fantomscan',
        url: 'https://ftmscan.com',
      },
    },
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 33001987,
      },
    },
  },
  {
    id: ChainId.GNOSIS,
    name: 'Gnosis Chain',
    network: 'gnosis',
    nativeCurrency: { name: 'xDAI', symbol: 'xDAI', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://xdai-rpc.gateway.pokt.network', 'https://rpc.gnosischain.com'],
      },
      public: {
        http: ['https://xdai-rpc.gateway.pokt.network', 'https://rpc.gnosischain.com'],
      },
    },
    blockExplorers: {
      etherscan: {
        name: 'Gnosis Blockchain Explorer',
        url: 'https://blockscout.com/xdai/mainnet',
      },
      default: {
        name: 'Gnosis Blockchain Explorer',
        url: 'https://blockscout.com/xdai/mainnet',
      },
    },
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 21022491,
      },
    },
  },
  {
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
        address: '0x4d81f45fcde2B1C9A93Bde5495dc3553bbEC8EFa',
        blockCreated: 400008,
      },
    },
  },
]

export const allChains = [...defaultChains, ...otherChains]
