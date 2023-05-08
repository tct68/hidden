import { BENTOBOX_SUBGRAPH_NAME, BentoBoxChainId, SUBGRAPH_HOST } from '@sushiswap/graph-config'

import { pager } from '../pager'
import { bentoTokensQuery } from '../queries/bentobox'
import { getNativePrice, getTokenPrices } from './exchange'

export default async function getBentoTVL() {
  const bentoTVLQueries: Promise<number>[] = []

  const chainIds = Object.keys(BENTOBOX_SUBGRAPH_NAME).map((chainId) => Number(chainId) as BentoBoxChainId)

  for (const chainId of chainIds) {
    bentoTVLQueries.push(
      (async function () {
        try {
          const nativePrice = await getNativePrice(chainId)
          const { tokens: bentoTokens } = await pager(
            `https://${SUBGRAPH_HOST[chainId]}/${BENTOBOX_SUBGRAPH_NAME[chainId]}`,
            bentoTokensQuery
          )
          const tokenPrices = await getTokenPrices(
            bentoTokens.map((bentoToken: any) => bentoToken.id),
            chainId
          )

          return bentoTokens
            .map((bentoToken: any) => {
              const tokenPriceUSD =
                Number(tokenPrices.find((tokenPrice: any) => tokenPrice.id === bentoToken.id)?.derivedETH ?? 0) *
                nativePrice

              return Number((bentoToken.rebase.elastic / 10 ** bentoToken.decimals) * tokenPriceUSD)
            })
            .reduce((acc: any, cur: any) => Number(acc) + Number(cur), 0)
        } catch {
          return 0
        }
      })()
    )
  }

  return (await Promise.all(bentoTVLQueries)).reduce((acc, cur) => acc + cur, 0)
}
