/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BoringOwnableData,
  BoringOwnableDataInterface,
} from "../../../../contracts/utils/BoringOwnable.sol/BoringOwnableData";

const _abi = [
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060d48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80638da5cb5b146037578063e30c397814607f575b600080fd5b60005460569073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015460569073ffffffffffffffffffffffffffffffffffffffff168156fea2646970667358221220c8200e7cf82fc1eca0a1b74ebc1897b0cbc13f427378ad6d0bbd5918e3f3174564736f6c634300080a0033";

type BoringOwnableDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoringOwnableDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoringOwnableData__factory extends ContractFactory {
  constructor(...args: BoringOwnableDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BoringOwnableData> {
    return super.deploy(overrides || {}) as Promise<BoringOwnableData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoringOwnableData {
    return super.attach(address) as BoringOwnableData;
  }
  override connect(signer: Signer): BoringOwnableData__factory {
    return super.connect(signer) as BoringOwnableData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringOwnableDataInterface {
    return new utils.Interface(_abi) as BoringOwnableDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringOwnableData {
    return new Contract(address, _abi, signerOrProvider) as BoringOwnableData;
  }
}
