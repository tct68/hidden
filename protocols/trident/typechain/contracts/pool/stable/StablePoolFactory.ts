/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface StablePoolFactoryInterface extends utils.Interface {
  functions: {
    "bytecodeHash()": FunctionFragment;
    "calculatePoolAddress(address,address,uint256)": FunctionFragment;
    "configAddress(bytes32)": FunctionFragment;
    "deployPool(bytes)": FunctionFragment;
    "getDeployData()": FunctionFragment;
    "getPools(address,address,uint256,uint256)": FunctionFragment;
    "masterDeployer()": FunctionFragment;
    "pools(address,address,uint256)": FunctionFragment;
    "poolsCount(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bytecodeHash"
      | "calculatePoolAddress"
      | "configAddress"
      | "deployPool"
      | "getDeployData"
      | "getPools"
      | "masterDeployer"
      | "pools"
      | "poolsCount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bytecodeHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePoolAddress",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "configAddress",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "deployPool",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPools",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "masterDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pools",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "poolsCount",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "bytecodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePoolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeployData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "masterDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolsCount", data: BytesLike): Result;

  events: {};
}

export interface StablePoolFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StablePoolFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bytecodeHash(overrides?: CallOverrides): Promise<[string]>;

    calculatePoolAddress(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    configAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    deployPool(
      _deployData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDeployData(overrides?: CallOverrides): Promise<[string, string]>;

    getPools(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      startIndex: PromiseOrValue<BigNumberish>,
      count: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { pairPools: string[] }>;

    masterDeployer(overrides?: CallOverrides): Promise<[string]>;

    pools(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    poolsCount(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;
  };

  bytecodeHash(overrides?: CallOverrides): Promise<string>;

  calculatePoolAddress(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    swapFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  configAddress(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  deployPool(
    _deployData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDeployData(overrides?: CallOverrides): Promise<[string, string]>;

  getPools(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    startIndex: PromiseOrValue<BigNumberish>,
    count: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  masterDeployer(overrides?: CallOverrides): Promise<string>;

  pools(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  poolsCount(
    token0: PromiseOrValue<string>,
    token1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    bytecodeHash(overrides?: CallOverrides): Promise<string>;

    calculatePoolAddress(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    configAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    deployPool(
      _deployData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getDeployData(overrides?: CallOverrides): Promise<[string, string]>;

    getPools(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      startIndex: PromiseOrValue<BigNumberish>,
      count: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    masterDeployer(overrides?: CallOverrides): Promise<string>;

    pools(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    poolsCount(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    bytecodeHash(overrides?: CallOverrides): Promise<BigNumber>;

    calculatePoolAddress(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployPool(
      _deployData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDeployData(overrides?: CallOverrides): Promise<BigNumber>;

    getPools(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      startIndex: PromiseOrValue<BigNumberish>,
      count: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    masterDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    pools(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolsCount(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bytecodeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculatePoolAddress(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    configAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployPool(
      _deployData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDeployData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPools(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      startIndex: PromiseOrValue<BigNumberish>,
      count: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    masterDeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pools(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolsCount(
      token0: PromiseOrValue<string>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
