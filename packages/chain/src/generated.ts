export default [
  {
    "name": "Ethereum Mainnet",
    "chain": "ETH",
    "icon": "ethereum",
    "rpc": [
      "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
      "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
      "https://api.mycryptoapi.com/eth",
      "https://cloudflare-eth.com",
      "https://ethereum.publicnode.com"
    ],
    "features": [
      {
        "name": "EIP155"
      },
      {
        "name": "EIP1559"
      }
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://ethereum.org",
    "shortName": "eth",
    "chainId": 1,
    "networkId": 1,
    "slip44": 60,
    "ens": {
      "registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    "explorers": [
      {
        "name": "etherscan",
        "url": "https://etherscan.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Goerli",
    "title": "Ethereum Testnet Goerli",
    "chain": "ETH",
    "rpc": [
      "https://goerli.infura.io/v3/${INFURA_API_KEY}",
      "wss://goerli.infura.io/v3/${INFURA_API_KEY}",
      "https://rpc.goerli.mudit.blog/"
    ],
    "faucets": [
      "http://fauceth.komputing.org?chain=5&address=${ADDRESS}",
      "https://goerli-faucet.slock.it?address=${ADDRESS}",
      "https://faucet.goerli.mudit.blog"
    ],
    "nativeCurrency": {
      "name": "Goerli Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://goerli.net/#about",
    "shortName": "gor",
    "chainId": 5,
    "networkId": 5,
    "ens": {
      "registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"
    },
    "explorers": [
      {
        "name": "etherscan-goerli",
        "url": "https://goerli.etherscan.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Optimism",
    "chain": "ETH",
    "rpc": [
      "https://mainnet.optimism.io/"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://optimism.io",
    "shortName": "oeth",
    "chainId": 10,
    "networkId": 10,
    "explorers": [
      {
        "name": "etherscan",
        "url": "https://optimistic.etherscan.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Binance Smart Chain Mainnet",
    "chain": "BSC",
    "rpc": [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "https://bsc.publicnode.com",
      "wss://bsc-ws-node.nariox.org"
    ],
    "faucets": [
      "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "nativeCurrency": {
      "name": "Binance Chain Native Token",
      "symbol": "BNB",
      "decimals": 18
    },
    "infoURL": "https://www.binance.org",
    "shortName": "bnb",
    "chainId": 56,
    "networkId": 56,
    "slip44": 714,
    "explorers": [
      {
        "name": "bscscan",
        "url": "https://bscscan.com",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Binance Smart Chain Testnet",
    "chain": "BSC",
    "rpc": [
      "https://data-seed-prebsc-1-s1.binance.org:8545",
      "https://data-seed-prebsc-2-s1.binance.org:8545",
      "https://data-seed-prebsc-1-s2.binance.org:8545",
      "https://data-seed-prebsc-2-s2.binance.org:8545",
      "https://data-seed-prebsc-1-s3.binance.org:8545",
      "https://data-seed-prebsc-2-s3.binance.org:8545"
    ],
    "faucets": [
      "https://testnet.binance.org/faucet-smart"
    ],
    "nativeCurrency": {
      "name": "Binance Chain Native Token",
      "symbol": "tBNB",
      "decimals": 18
    },
    "infoURL": "https://testnet.binance.org/",
    "shortName": "bnbt",
    "chainId": 97,
    "networkId": 97,
    "explorers": [
      {
        "name": "bscscan-testnet",
        "url": "https://testnet.bscscan.com",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Gnosis",
    "chain": "GNO",
    "icon": "gnosis",
    "rpc": [
      "https://rpc.gnosischain.com",
      "https://rpc.ankr.com/gnosis",
      "https://gnosischain-rpc.gateway.pokt.network",
      "https://gnosis-mainnet.public.blastapi.io",
      "wss://rpc.gnosischain.com/wss"
    ],
    "faucets": [
      "https://gnosisfaucet.com",
      "https://faucet.gimlu.com/gnosis",
      "https://stakely.io/faucet/gnosis-chain-xdai",
      "https://faucet.prussia.dev/xdai"
    ],
    "nativeCurrency": {
      "name": "xDAI",
      "symbol": "xDAI",
      "decimals": 18
    },
    "infoURL": "https://docs.gnosischain.com",
    "shortName": "gno",
    "chainId": 100,
    "networkId": 100,
    "slip44": 700,
    "explorers": [
      {
        "name": "gnosisscan",
        "url": "https://gnosisscan.io",
        "standard": "EIP3091"
      },
      {
        "name": "blockscout",
        "url": "https://blockscout.com/xdai/mainnet",
        "icon": "blockscout",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Polygon Mainnet",
    "chain": "Polygon",
    "icon": "polygon",
    "rpc": [
      "https://polygon-rpc.com/",
      "https://rpc-mainnet.matic.network",
      "https://matic-mainnet.chainstacklabs.com",
      "https://rpc-mainnet.maticvigil.com",
      "https://rpc-mainnet.matic.quiknode.pro",
      "https://matic-mainnet-full-rpc.bwarelabs.com",
      "https://polygon-bor.publicnode.com"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "MATIC",
      "symbol": "MATIC",
      "decimals": 18
    },
    "infoURL": "https://polygon.technology/",
    "shortName": "matic",
    "chainId": 137,
    "networkId": 137,
    "slip44": 966,
    "explorers": [
      {
        "name": "polygonscan",
        "url": "https://polygonscan.com",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Fantom Opera",
    "chain": "FTM",
    "rpc": [
      "https://rpc.ftm.tools",
      "https://fantom.publicnode.com"
    ],
    "faucets": [
      "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "nativeCurrency": {
      "name": "Fantom",
      "symbol": "FTM",
      "decimals": 18
    },
    "infoURL": "https://fantom.foundation",
    "shortName": "ftm",
    "chainId": 250,
    "networkId": 250,
    "icon": "fantom",
    "explorers": [
      {
        "name": "ftmscan",
        "url": "https://ftmscan.com",
        "icon": "ftmscan",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Fantom Testnet",
    "chain": "FTM",
    "rpc": [
      "https://rpc.testnet.fantom.network"
    ],
    "faucets": [
      "https://faucet.fantom.network"
    ],
    "nativeCurrency": {
      "name": "Fantom",
      "symbol": "FTM",
      "decimals": 18
    },
    "infoURL": "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet",
    "shortName": "tftm",
    "chainId": 4002,
    "networkId": 4002,
    "icon": "fantom",
    "explorers": [
      {
        "name": "ftmscan",
        "url": "https://testnet.ftmscan.com",
        "icon": "ftmscan",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Arbitrum One",
    "chainId": 42161,
    "shortName": "arb1",
    "chain": "ETH",
    "networkId": 42161,
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "rpc": [
      "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}",
      "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
      "https://arb1.arbitrum.io/rpc"
    ],
    "faucets": [],
    "explorers": [
      {
        "name": "Arbiscan",
        "url": "https://arbiscan.io",
        "standard": "EIP3091"
      },
      {
        "name": "Arbitrum Explorer",
        "url": "https://explorer.arbitrum.io",
        "standard": "EIP3091"
      }
    ],
    "infoURL": "https://arbitrum.io",
    "parent": {
      "type": "L2",
      "chain": "eip155-1",
      "bridges": [
        {
          "url": "https://bridge.arbitrum.io"
        }
      ]
    }
  },
  {
    "name": "Arbitrum Nova",
    "chainId": 42170,
    "shortName": "arb-nova",
    "chain": "ETH",
    "networkId": 42170,
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "rpc": [
      "https://nova.arbitrum.io/rpc"
    ],
    "faucets": [],
    "explorers": [
      {
        "name": "Arbitrum Nova Chain Explorer",
        "url": "https://nova-explorer.arbitrum.io",
        "icon": "blockscout",
        "standard": "EIP3091"
      }
    ],
    "infoURL": "https://arbitrum.io",
    "parent": {
      "type": "L2",
      "chain": "eip155-1",
      "bridges": [
        {
          "url": "https://bridge.arbitrum.io"
        }
      ]
    }
  },
  {
    "name": "Avalanche Fuji Testnet",
    "chain": "AVAX",
    "icon": "avax",
    "rpc": [
      "https://api.avax-test.network/ext/bc/C/rpc"
    ],
    "faucets": [
      "https://faucet.avax-test.network/"
    ],
    "nativeCurrency": {
      "name": "Avalanche",
      "symbol": "AVAX",
      "decimals": 18
    },
    "infoURL": "https://cchain.explorer.avax-test.network",
    "shortName": "Fuji",
    "chainId": 43113,
    "networkId": 1,
    "explorers": [
      {
        "name": "snowtrace",
        "url": "https://testnet.snowtrace.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Avalanche C-Chain",
    "chain": "AVAX",
    "icon": "avax",
    "rpc": [
      "https://api.avax.network/ext/bc/C/rpc",
      "https://avalanche-c-chain.publicnode.com"
    ],
    "features": [
      {
        "name": "EIP1559"
      }
    ],
    "faucets": [
      "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "nativeCurrency": {
      "name": "Avalanche",
      "symbol": "AVAX",
      "decimals": 18
    },
    "infoURL": "https://www.avax.network/",
    "shortName": "avax",
    "chainId": 43114,
    "networkId": 43114,
    "slip44": 9005,
    "explorers": [
      {
        "name": "snowtrace",
        "url": "https://snowtrace.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Linea Testnet",
    "title": "Linea Goerli Testnet",
    "chain": "ETH",
    "rpc": [
      "https://rpc.goerli.linea.build",
      "wss://rpc.goerli.linea.build",
      "https://consensys-zkevm-goerli-prealpha.infura.io/v3/${INFURA_API_KEY}",
      "wss://consensys-zkevm-goerli-prealpha.infura.io/v3/${INFURA_API_KEY}"
    ],
    "faucets": [
      "https://faucetlink.to/goerli"
    ],
    "nativeCurrency": {
      "name": "Linea Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://linea.build",
    "shortName": "linea-testnet",
    "chainId": 59140,
    "networkId": 59140,
    "icon": "linea",
    "parent": {
      "type": "L2",
      "chain": "eip155-5",
      "bridges": [
        {
          "url": "https://goerli.hop.exchange/#/send?token=ETH&sourceNetwork=ethereum&destNetwork=linea"
        }
      ]
    },
    "explorers": [
      {
        "name": "blockscout",
        "url": "https://explorer.goerli.linea.build",
        "standard": "EIP3091",
        "icon": "linea"
      }
    ],
    "status": "active"
  },
  {
    "name": "Mumbai",
    "title": "Polygon Testnet Mumbai",
    "chain": "Polygon",
    "icon": "polygon",
    "rpc": [
      "https://matic-mumbai.chainstacklabs.com",
      "https://rpc-mumbai.maticvigil.com",
      "https://matic-testnet-archive-rpc.bwarelabs.com"
    ],
    "faucets": [
      "https://faucet.polygon.technology/"
    ],
    "nativeCurrency": {
      "name": "MATIC",
      "symbol": "MATIC",
      "decimals": 18
    },
    "infoURL": "https://polygon.technology/",
    "shortName": "maticmum",
    "chainId": 80001,
    "networkId": 80001,
    "explorers": [
      {
        "name": "polygonscan",
        "url": "https://mumbai.polygonscan.com",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Base Goerli Testnet",
    "chain": "ETH",
    "rpc": [
      "https://goerli.base.org"
    ],
    "faucets": [
      "https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"
    ],
    "nativeCurrency": {
      "name": "Goerli Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://base.org",
    "shortName": "basegor",
    "chainId": 84531,
    "networkId": 84531,
    "explorers": [
      {
        "name": "basescan",
        "url": "https://goerli.basescan.org",
        "standard": "none"
      },
      {
        "name": "basescout",
        "url": "https://base-goerli.blockscout.com",
        "standard": "none"
      }
    ]
  },
  {
    "name": "Scroll Alpha Testnet",
    "chain": "ETH",
    "status": "incubating",
    "rpc": [
      "https://alpha-rpc.scroll.io/l2"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://scroll.io",
    "shortName": "scr-alpha",
    "chainId": 534353,
    "networkId": 534353,
    "explorers": [
      {
        "name": "Scroll Alpha Testnet Block Explorer",
        "url": "https://blockscout.scroll.io",
        "standard": "EIP3091"
      }
    ],
    "parent": {
      "type": "L2",
      "chain": "eip155-5",
      "bridges": []
    }
  }
] as const