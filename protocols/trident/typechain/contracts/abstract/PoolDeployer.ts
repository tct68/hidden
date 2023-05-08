/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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
} from "../../common";

export interface PoolDeployerInterface extends utils.Interface {
  functions: {
    "configAddress(bytes32)": FunctionFragment;
    "getPools(address,address,uint256,uint256)": FunctionFragment;
    "masterDeployer()": FunctionFragment;
    "pools(address,address,uint256)": FunctionFragment;
    "poolsCount(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "configAddress"
      | "getPools"
      | "masterDeployer"
      | "pools"
      | "poolsCount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "configAddress",
    values: [PromiseOrValue<BytesLike>]
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
    functionFragment: "configAddress",
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

export interface PoolDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PoolDeployerInterface;

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
    configAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

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

  configAddress(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

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
    configAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

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
    configAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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
    configAddress(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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
