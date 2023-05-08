import { BigNumber } from 'ethers'
import { Address, readContracts } from 'wagmi'
import { V3ChainId } from '@sushiswap/v3-sdk'
import { getV3NonFungiblePositionManagerConractConfig } from '../../contracts/useV3NonFungiblePositionManager'

export const getConcentratedPositionOwners = async ({
  tokenIds,
}: {
  tokenIds: { chainId: V3ChainId; tokenId: BigNumber }[]
}) => {
  return readContracts({
    contracts: tokenIds.map(
      ({ tokenId, chainId }) =>
        ({
          chainId,
          address: getV3NonFungiblePositionManagerConractConfig(chainId).address as Address,
          abi: [
            {
              inputs: [
                {
                  internalType: 'uint256',
                  name: 'tokenId',
                  type: 'uint256',
                },
              ],
              name: 'ownerOf',
              outputs: [
                {
                  internalType: 'address',
                  name: '',
                  type: 'address',
                },
              ],
              stateMutability: 'view',
              type: 'function',
            },
          ],
          functionName: 'ownerOf',
          args: [BigNumber.from(tokenId ? tokenId : 0)],
        } as const)
    ),
  })
}
