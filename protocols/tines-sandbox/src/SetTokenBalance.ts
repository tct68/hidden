import { setStorageAt } from '@nomicfoundation/hardhat-network-helpers'
import { erc20Abi } from '@sushiswap/abi'
import { BigNumber, Contract } from 'ethers'
import { keccak256 } from 'ethers/lib/utils'
import { ethers } from 'hardhat'

// Sometimes token contract is a proxy without delegate call
// So, its storage is in other contract and we need to work with it
const TokenProxyMap: Record<string, string> = {
  '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6': '0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67', // Ethereum sBTC
  '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb': '0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c', // Ethereum sETH
  '0xd71ecff9342a5ced620049e616c5035f1db98620': '0x6568D9e750fC44AF00f857885Dfb8281c00529c4', // Ethereum sEUR
  '0xbbc455cb4f1b9e4bfc4b73970d360c8f032efee6': '0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0', // Ethereum sLink
  '0x0316eb71485b0ab14103307bf65a021042c6d380': '0xc728693dcf6b257bf88577d6c92e52028426eefd', // Ethereum HBTC
}

const cache: Record<string, number> = {}

export async function setTokenBalance(token: string, user: string, balance: bigint): Promise<boolean> {
  const setStorage = async (slotNumber: number) => {
    // Solidity mapping
    const slotData = '0x' + user.padStart(64, '0') + Number(slotNumber).toString(16).padStart(64, '0')
    const slot = keccak256(slotData)
    await setStorageAt(token, slot, balance)
    // Vyper mapping
    const slotData2 = '0x' + Number(slotNumber).toString(16).padStart(64, '0') + user.padStart(64, '0')
    const slot2 = keccak256(slotData2)
    await setStorageAt(token, slot2, balance)
  }

  if (user.startsWith('0x')) user = user.substring(2)
  const realContract = TokenProxyMap[token.toLowerCase()]
  token = realContract || token

  const cashedSlot = cache[token.toLowerCase()]
  if (cashedSlot !== undefined) {
    await setStorage(cashedSlot)
    return true
  }

  const tokenContract = new Contract(token, erc20Abi, ethers.provider)

  const balancePrimary = (await tokenContract.balanceOf(user)) as BigNumber

  for (let i = 0; i < 200; ++i) {
    await setStorage(i)
    const resBalance = (await tokenContract.balanceOf(user)) as BigNumber
    //console.log(i, '0x' + user.padStart(64, '0') + Number(i).toString(16).padStart(64, '0'), resBalance.toString())

    if (!resBalance.isZero()) {
      if (resBalance.toString() === balance.toString() || !resBalance.eq(balancePrimary)) {
        cache[token.toLowerCase()] = i
        return true
      }
    }
  }
  return false
}
