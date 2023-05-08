/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleStrategyMock,
  SimpleStrategyMockInterface,
} from "../../../contracts/mocks/SimpleStrategyMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bentoBox_",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "exit",
    outputs: [
      {
        internalType: "int256",
        name: "amountAdded",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "harvest",
    outputs: [
      {
        internalType: "int256",
        name: "amountAdded",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "actualAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516107323803806107328339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b811660a052911b1660805260805160601c60a05160601c6106886100aa6000398060f5528061023b52806102735280610314528061034852806103ca528061046e52508061016d528061021952806102f2528061044c52506106886000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806318fccc76146100515780632e1a7d4d1461008f5780636939aaf5146100ac5780637f8661a1146100cb575b600080fd5b61007d6004803603604081101561006757600080fd5b50803590602001356001600160a01b03166100e8565b60408051918252519081900360200190f35b61007d600480360360208110156100a557600080fd5b5035610266565b6100c9600480360360208110156100c257600080fd5b503561033d565b005b61007d600480360360208110156100e157600080fd5b50356103bd565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610167576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61020a837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156101d857600080fd5b505afa1580156101ec573d6000803e3d6000fd5b505050506040513d602081101561020257600080fd5b505190610498565b90506102606001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000836104e8565b92915050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102e5576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6103396001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000846104e8565b5090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103ba576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b50565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461043c576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b5060006104936001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000846104e8565b919050565b80820382811115610260576040805162461bcd60e51b8152602060048201526015602482015274426f72696e674d6174683a20556e646572666c6f7760581b604482015290519081900360640190fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106105655780518252601f199092019160209182019101610546565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146105c7576040519150601f19603f3d011682016040523d82523d6000602084013e6105cc565b606091505b50915091508180156105fa5750805115806105fa57508080602001905160208110156105f757600080fd5b50515b61064b576040805162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604482015290519081900360640190fd5b505050505056fea264697066735822122017f9bf26f5e458b36d7fc532d787ed5e5cd38b29ee5642561985affec264505a64736f6c634300060c0033";

type SimpleStrategyMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleStrategyMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleStrategyMock__factory extends ContractFactory {
  constructor(...args: SimpleStrategyMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    bentoBox_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleStrategyMock> {
    return super.deploy(
      bentoBox_,
      token_,
      overrides || {}
    ) as Promise<SimpleStrategyMock>;
  }
  override getDeployTransaction(
    bentoBox_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(bentoBox_, token_, overrides || {});
  }
  override attach(address: string): SimpleStrategyMock {
    return super.attach(address) as SimpleStrategyMock;
  }
  override connect(signer: Signer): SimpleStrategyMock__factory {
    return super.connect(signer) as SimpleStrategyMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleStrategyMockInterface {
    return new utils.Interface(_abi) as SimpleStrategyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleStrategyMock {
    return new Contract(address, _abi, signerOrProvider) as SimpleStrategyMock;
  }
}
