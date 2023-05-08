/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FlashLoanerMock,
  FlashLoanerMockInterface,
} from "../../../contracts/mocks/FlashLoanerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "fees",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onBatchFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
        name: "",
        type: "bytes",
      },
    ],
    name: "onFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610679806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806323e30c8b1461003b578063d9d17623146100d0575b600080fd5b6100ce600480360360a081101561005157600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561009057600080fd5b8201836020820111156100a257600080fd5b803590602001918460018302840111600160201b831117156100c357600080fd5b50909250905061023e565b005b6100ce600480360360a08110156100e657600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561011057600080fd5b82018360208201111561012257600080fd5b803590602001918460208302840111600160201b8311171561014357600080fd5b919390929091602081019035600160201b81111561016057600080fd5b82018360208201111561017257600080fd5b803590602001918460208302840111600160201b8311171561019357600080fd5b919390929091602081019035600160201b8111156101b057600080fd5b8201836020820111156101c257600080fd5b803590602001918460208302840111600160201b831117156101e357600080fd5b919390929091602081019035600160201b81111561020057600080fd5b82018360208201111561021257600080fd5b803590602001918460018302840111600160201b8311171561023357600080fd5b50909250905061030c565b33600061024b868661042b565b90506000876001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561029c57600080fd5b505afa1580156102b0573d6000803e3d6000fd5b505050506040513d60208110156102c657600080fd5b505190506102de6001600160a01b0389168484610489565b60006102ea82846105f3565b90506103006001600160a01b038a168b83610489565b50505050505050505050565b3360006103458686838161031c57fe5b905060200201358989600081811061033057fe5b9050602002013561042b90919063ffffffff16565b905060008a8a600081811061035657fe5b905060200201356001600160a01b031690506000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156103b757600080fd5b505afa1580156103cb573d6000803e3d6000fd5b505050506040513d60208110156103e157600080fd5b505190506103f96001600160a01b0383168585610489565b600061040582856105f3565b905061041b6001600160a01b0384168f83610489565b5050505050505050505050505050565b81810181811015610483576040805162461bcd60e51b815260206004820152601860248201527f426f72696e674d6174683a20416464204f766572666c6f770000000000000000604482015290519081900360640190fd5b92915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106105065780518252601f1990920191602091820191016104e7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610568576040519150601f19603f3d011682016040523d82523d6000602084013e61056d565b606091505b509150915081801561059b57508051158061059b575080806020019051602081101561059857600080fd5b50515b6105ec576040805162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604482015290519081900360640190fd5b5050505050565b80820382811115610483576040805162461bcd60e51b8152602060048201526015602482015274426f72696e674d6174683a20556e646572666c6f7760581b604482015290519081900360640190fdfea26469706673582212207d10bc26457f7be72058fe04a0d77fdcd6a6735ac597dcc0440b0c8c41c6cf8564736f6c634300060c0033";

type FlashLoanerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlashLoanerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlashLoanerMock__factory extends ContractFactory {
  constructor(...args: FlashLoanerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FlashLoanerMock> {
    return super.deploy(overrides || {}) as Promise<FlashLoanerMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FlashLoanerMock {
    return super.attach(address) as FlashLoanerMock;
  }
  override connect(signer: Signer): FlashLoanerMock__factory {
    return super.connect(signer) as FlashLoanerMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashLoanerMockInterface {
    return new utils.Interface(_abi) as FlashLoanerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashLoanerMock {
    return new Contract(address, _abi, signerOrProvider) as FlashLoanerMock;
  }
}
