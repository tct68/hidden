/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MasterContractManager,
  MasterContractManagerInterface,
} from "../../contracts/MasterContractManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    name: "LogDeploy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "protocol",
        type: "address",
      },
    ],
    name: "LogRegisterProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "LogSetMasterContractApproval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "LogWhiteListMasterContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "useCreate2",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "masterContractApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "masterContractOf",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
  {
    inputs: [],
    name: "registerProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "setMasterContractApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "whitelistMasterContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedMasterContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a34660a081905261005f81610068565b608052506100e7565b604080517f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a8666020808301919091527fd7df266aff736d415a9dc14b4158201d612e70d75b9c7f4e375ccfd20aa5166f828401526060820193909352306080808301919091528251808303909101815260a0909101909152805191012090565b60805160a051610fb361010a6000398061074e5250806107835250610fb36000f3fe6080604052600436106100c25760003560e01c80637ecebe001161007f578063aee4d1b211610059578063aee4d1b2146102eb578063bafe4f1414610300578063c0a47c9314610333578063e30c39781461038d576100c2565b80637ecebe00146102685780638da5cb5b1461029b57806391e0eab5146102b0576100c2565b8063078dfbe7146100c757806312a90c8a1461010c5780631f54245b146101535780633644e515146101f15780634e71e0c814610218578063733a9d7c1461022d575b600080fd5b3480156100d357600080fd5b5061010a600480360360608110156100ea57600080fd5b506001600160a01b038135169060208101351515906040013515156103a2565b005b34801561011857600080fd5b5061013f6004803603602081101561012f57600080fd5b50356001600160a01b03166104ea565b604080519115158252519081900360200190f35b6101d56004803603606081101561016957600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561019457600080fd5b8201836020820111156101a657600080fd5b803590602001918460018302840111640100000000831117156101c857600080fd5b91935091503515156104ff565b604080516001600160a01b039092168252519081900360200190f35b3480156101fd57600080fd5b50610206610749565b60408051918252519081900360200190f35b34801561022457600080fd5b5061010a6107a9565b34801561023957600080fd5b5061010a6004803603604081101561025057600080fd5b506001600160a01b038135169060200135151561086b565b34801561027457600080fd5b506102066004803603602081101561028b57600080fd5b50356001600160a01b0316610985565b3480156102a757600080fd5b506101d5610997565b3480156102bc57600080fd5b5061013f600480360360408110156102d357600080fd5b506001600160a01b03813581169160200135166109a6565b3480156102f757600080fd5b5061010a6109c6565b34801561030c57600080fd5b506101d56004803603602081101561032357600080fd5b50356001600160a01b0316610a0d565b34801561033f57600080fd5b5061010a600480360360c081101561035657600080fd5b506001600160a01b038135811691602081013590911690604081013515159060ff6060820135169060808101359060a00135610a28565b34801561039957600080fd5b506101d5610eef565b6000546001600160a01b03163314610401576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b81156104c9576001600160a01b03831615158061041b5750805b610464576040805162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b604482015290519081900360640190fd5b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b0319918216179091556001805490911690556104e5565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b60046020526000908152604090205460ff1681565b60006001600160a01b03851661055c576040805162461bcd60e51b815260206004820181905260248201527f426f72696e67466163746f72793a204e6f206d6173746572436f6e7472616374604482015290519081900360640190fd5b606085901b82156105d357600085856040518083838082843760405192018290038220733d602d80600a3d3981f3363d3d373d3d3d363d7360601b8352601483018890526e5af43d82803e903d91602b57fd5bf360881b60288401529550909350849250603791508390506000f593505050610618565b604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09250505b6001600160a01b0382811660008181526002602090815260409182902080546001600160a01b031916948b169490941790935551631377d1f560e21b815260048101928352602481018790529091634ddf47d491349189918991908190604401848480828437600081840152601f19601f82011690508083019250505093505050506000604051808303818588803b1580156106b357600080fd5b505af11580156106c7573d6000803e3d6000fd5b5050505050816001600160a01b0316866001600160a01b03167fd62166f3c2149208e51788b1401cc356bf5da1fc6c7886a32e18570f57d88b3b878760405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a350949350505050565b6000467f000000000000000000000000000000000000000000000000000000000000000081146107815761077c81610efe565b6107a3565b7f00000000000000000000000000000000000000000000000000000000000000005b91505090565b6001546001600160a01b0316338114610809576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000546001600160a01b031633146108ca576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038216610925576040805162461bcd60e51b815260206004820152601c60248201527f4d6173746572434d67723a2043616e6e6f7420617070726f7665203000000000604482015290519081900360640190fd5b6001600160a01b038216600081815260046020908152604091829020805460ff1916851515908117909155825190815291517f31a1e0eac44b54ac6c2a2efa87e92c83405ffcf33fceef02a7bca695130e26009281900390910190a25050565b60056020526000908152604090205481565b6000546001600160a01b031681565b600360209081526000928352604080842090915290825290205460ff1681565b3360008181526002602052604080822080546001600160a01b03191684179055517fdfb44ffabf0d3a8f650d3ce43eff98f6d050e7ea1a396d5794f014e7dadabacb9190a2565b6002602052600090815260409020546001600160a01b031681565b6001600160a01b038516610a83576040805162461bcd60e51b815260206004820152601b60248201527f4d6173746572434d67723a206d617374657243206e6f74207365740000000000604482015290519081900360640190fd5b81158015610a8f575080155b8015610a9c575060ff8316155b15610bdd576001600160a01b0386163314610afe576040805162461bcd60e51b815260206004820152601b60248201527f4d6173746572434d67723a2075736572206e6f742073656e6465720000000000604482015290519081900360640190fd5b6001600160a01b038681166000908152600260205260409020541615610b6b576040805162461bcd60e51b815260206004820152601960248201527f4d6173746572434d67723a207573657220697320636c6f6e6500000000000000604482015290519081900360640190fd5b6001600160a01b03851660009081526004602052604090205460ff16610bd8576040805162461bcd60e51b815260206004820152601b60248201527f4d6173746572434d67723a206e6f742077686974656c69737465640000000000604482015290519081900360640190fd5b610e7e565b6001600160a01b038616610c38576040805162461bcd60e51b815260206004820152601c60248201527f4d6173746572434d67723a20557365722063616e6e6f74206265203000000000604482015290519081900360640190fd5b600060405180604001604052806002815260200161190160f01b815250610c5d610749565b7f1962bc9f5484cb7a998701b81090e966ee1fce5771af884cceee7c081b14ade287610ca9577fb426802f1f7dc850a7b6b38805edea2442f3992878a9ab985abfe8091d95d0b1610ccb565b7f422ac5323fe049241dee67716229a1cc1bc7b313b23dfe3ef6d42ab177a3b2845b6001600160a01b03808c16600081815260056020908152604091829020805460018101909155825180830197909752868301959095526060860192909252918c1660808501528a151560a085015260c0808501939093528151808503909301835260e084019091528151918101919091208451909261010001918291908601908083835b60208310610d6e5780518252601f199092019160209182019101610d4f565b51815160209384036101000a6000190180199092169116179052920194855250838101929092525060408051808403830181528184018083528151918401919091206000918290526060850180845281905260ff8a16608086015260a0850189905260c085018890529151919550935060019260e08082019392601f1981019281900390910190855afa158015610e09573d6000803e3d6000fd5b505050602060405103519050876001600160a01b0316816001600160a01b031614610e7b576040805162461bcd60e51b815260206004820152601d60248201527f4d6173746572434d67723a20496e76616c6964205369676e6174757265000000604482015290519081900360640190fd5b50505b6001600160a01b038581166000818152600360209081526040808320948b1680845294825291829020805460ff1916891515908117909155825190815291517f5f6ebb64ba012a851c6f014e6cad458ddf213d1512049b31cd06365c2b0592579281900390910190a3505050505050565b6001546001600160a01b031681565b604080517f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a8666020808301919091527fd7df266aff736d415a9dc14b4158201d612e70d75b9c7f4e375ccfd20aa5166f828401526060820193909352306080808301919091528251808303909101815260a090910190915280519101209056fea2646970667358221220eeb484b52961184ecb19ba6a6d786ccd77a6396b9f546fe4d7dcbfd38b70e02f64736f6c634300060c0033";

type MasterContractManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MasterContractManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MasterContractManager__factory extends ContractFactory {
  constructor(...args: MasterContractManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MasterContractManager> {
    return super.deploy(overrides || {}) as Promise<MasterContractManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MasterContractManager {
    return super.attach(address) as MasterContractManager;
  }
  override connect(signer: Signer): MasterContractManager__factory {
    return super.connect(signer) as MasterContractManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterContractManagerInterface {
    return new utils.Interface(_abi) as MasterContractManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterContractManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MasterContractManager;
  }
}
