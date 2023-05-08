import type { ChainId } from '@sushiswap/chain'
import type {} from '@sushiswap/database'
import type { getEarnPool as getEarnPoolOriginal } from '@sushiswap/pools-api/lib/api'
import { PoolApiSchema } from '@sushiswap/pools-api/lib/schemas'
import { fetch } from '@whatwg-node/fetch'
import type { GetApiInputFromOutput, SWRHookConfig } from 'src/types'
import useSWR from 'swr'

import { POOL_API } from '.'

export { PoolApiSchema }
export type Pool = Awaited<ReturnType<typeof getEarnPoolOriginal>>
// Slightly opinionated, adding string to support the chainId:address format
export type GetPoolArgs =
  | GetApiInputFromOutput<(typeof PoolApiSchema)['_input'], (typeof PoolApiSchema)['_output']>
  | string

export const getPoolUrl = (args: GetPoolArgs) => {
  let chainId, address
  if (typeof args === 'string') {
    ;[chainId, address] = args.split(':') as [ChainId, string]
  } else {
    ;[chainId, address] = [args.chainId, args.address]
  }

  return `${POOL_API}/api/v0/${chainId}/${address}`
}

export const getPool = async (args: GetPoolArgs): Promise<Pool> => {
  return fetch(getPoolUrl(args)).then((data) => data.json())
}

export const usePool = ({ args, shouldFetch }: SWRHookConfig<GetPoolArgs>) => {
  return useSWR<Pool>(shouldFetch !== false ? getPoolUrl(args) : null, async (url) =>
    fetch(url).then((data) => data.json())
  )
}
