import type { getEarnPoolCount as getEarnPoolCountOriginal } from '@sushiswap/pools-api/lib/api'
import { PoolCountApiSchema } from '@sushiswap/pools-api/lib/schemas'
import { fetch } from '@whatwg-node/fetch'
import { parseArgs } from 'src/functions'
import type { GetApiInputFromOutput, SWRHookConfig } from 'src/types'
import useSWR from 'swr'

import { POOL_API } from '.'

export { PoolCountApiSchema }
export type PoolCount = Awaited<ReturnType<typeof getEarnPoolCountOriginal>>
export type GetPoolCountArgs =
  | GetApiInputFromOutput<(typeof PoolCountApiSchema)['_input'], (typeof PoolCountApiSchema)['_output']>
  | undefined

export const getPoolCountUrl = (args: GetPoolCountArgs) => {
  return `${POOL_API}/api/v0/count${parseArgs(args)}`
}

export const getPoolCount = async (args: GetPoolCountArgs): Promise<PoolCount> => {
  return fetch(getPoolCountUrl(args)).then((data) => data.json())
}

export const usePoolCount = ({ args, shouldFetch }: SWRHookConfig<GetPoolCountArgs>) => {
  return useSWR<PoolCount>(shouldFetch !== false ? getPoolCountUrl(args) : null, async (url) =>
    fetch(url).then((data) => data.json())
  )
}
