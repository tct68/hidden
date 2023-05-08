// @ts-nocheck

import { chainName, chainShortName } from '@sushiswap/chain'
import {
  SUBGRAPH_HOST,
  SUSHISWAP_ENABLED_NETWORKS,
  SUSHISWAP_SUBGRAPH_NAME,
  TRIDENT_ENABLED_NETWORKS,
  TRIDENT_SUBGRAPH_NAME,
} from '@sushiswap/graph-config'

import { FactoryDaySnapshot, Query, QueryResolvers } from '../../.graphclient/index.js'

export const factoryDaySnapshotsByChainIds: QueryResolvers['factoryDaySnapshotsByChainIds'] = async (
  root,
  args,
  context,
  info
): Promise<Query['factoryDaySnapshotsByChainIds']> =>
  Promise.all<Query['factoryDaySnapshotsByChainIds'][]>([
    ...args.chainIds
      .filter((el): el is (typeof TRIDENT_ENABLED_NETWORKS)[number] => TRIDENT_ENABLED_NETWORKS.includes(el))
      .map((chainId) =>
        context.Trident.Query.factoryDaySnapshots({
          root,
          args,
          context: {
            ...context,
            chainId,
            chainName: chainName[chainId],
            chainShortName: chainShortName[chainId],
            subgraphName: TRIDENT_SUBGRAPH_NAME[chainId],
            subgraphHost: SUBGRAPH_HOST[chainId],
          },
          info,
        }).then((snapshots: FactoryDaySnapshot[]) => {
          return snapshots.map((snapshot) => ({
            ...snapshot,
            chainId,
            chainName: chainName[chainId],
            chainShortName: chainShortName[chainId],
          }))
        })
      ),
    ...args.chainIds
      .filter((el): el is (typeof SUSHISWAP_ENABLED_NETWORKS)[number] => SUSHISWAP_ENABLED_NETWORKS.includes(el))
      .map((chainId) =>
        context.SushiSwap.Query.factoryDaySnapshots({
          root,
          args,
          context: {
            ...context,
            chainId,
            chainName: chainName[chainId],
            chainShortName: chainShortName[chainId],
            subgraphName: SUSHISWAP_SUBGRAPH_NAME[chainId],
            subgraphHost: SUBGRAPH_HOST[chainId],
          },
          info,
        }).then((snapshots: FactoryDaySnapshot[]) => {
          if (!Array.isArray(snapshots)) {
            // console.log({ snapshots })
          }
          return snapshots.map((snapshot) => ({
            ...snapshot,
            chainId,
            chainName: chainName[chainId],
            chainShortName: chainShortName[chainId],
          }))
        })
      ),
  ]).then((snapshots) => snapshots.flat())
