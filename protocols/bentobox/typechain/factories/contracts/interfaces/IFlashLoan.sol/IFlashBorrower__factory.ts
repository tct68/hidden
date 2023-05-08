/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFlashBorrower,
  IFlashBorrowerInterface,
} from "../../../../contracts/interfaces/IFlashLoan.sol/IFlashBorrower";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFlashBorrower__factory {
  static readonly abi = _abi;
  static createInterface(): IFlashBorrowerInterface {
    return new utils.Interface(_abi) as IFlashBorrowerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFlashBorrower {
    return new Contract(address, _abi, signerOrProvider) as IFlashBorrower;
  }
}
