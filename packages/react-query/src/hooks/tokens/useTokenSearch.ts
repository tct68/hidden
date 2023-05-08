import {getAddress, isAddress} from '@ethersproject/address'
import {Token} from '@sushiswap/currency'
import {useQuery} from '@tanstack/react-query'

interface UseTokensParams {
    address: string | undefined
    enabled?: boolean
}

type Data = Array<{
    id: string
    address: string
    name: string
    symbol: string
    decimals: number
    status: "UNKNOWN" | "APPROVED"
}>

const hydrate = (data: Data) => {
    return data.reduce<Record<string, { token: Token; official: boolean }>>((acc, {id, name, symbol, decimals, status}) => {
        const [chainId, address] = id.split(':')
        acc[getAddress(address)] = {
            token: new Token({
                chainId,
                name,
                decimals,
                symbol,
                address,
            }),
            official: status === "APPROVED"
        }
        return acc
    }, {})
}

export const useTokenSearch = ({address, enabled = true}: UseTokensParams) => {
    return useQuery({
        queryKey: ['tokenSearch', {address}],
        queryFn: async () =>
            fetch(`https://tokens.sushi.com/v0/search/${address}`).then((response) => response.json()),
        select: hydrate,
        enabled: enabled && !!address && isAddress(address),
        staleTime: 900000, // 15 mins
        cacheTime: 86400000 // 24hs
    })
}
