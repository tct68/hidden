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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace IPool {
  export type TokenAmountStruct = {
    token: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type TokenAmountStructOutput = [string, BigNumber] & {
    token: string;
    amount: BigNumber;
  };
}

export interface ConstantProductPoolInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "PERMIT_TYPEHASH()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "barFee()": FunctionFragment;
    "barFeeTo()": FunctionFragment;
    "bento()": FunctionFragment;
    "burn(bytes)": FunctionFragment;
    "burnSingle(bytes)": FunctionFragment;
    "decimals()": FunctionFragment;
    "flashSwap(bytes)": FunctionFragment;
    "getAmountIn(bytes)": FunctionFragment;
    "getAmountOut(bytes)": FunctionFragment;
    "getAssets()": FunctionFragment;
    "getNativeReserves()": FunctionFragment;
    "getReserves()": FunctionFragment;
    "kLast()": FunctionFragment;
    "masterDeployer()": FunctionFragment;
    "mint(bytes)": FunctionFragment;
    "name()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "poolIdentifier()": FunctionFragment;
    "price0CumulativeLast()": FunctionFragment;
    "price1CumulativeLast()": FunctionFragment;
    "swap(bytes)": FunctionFragment;
    "swapFee()": FunctionFragment;
    "symbol()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "updateBarParameters()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR"
      | "PERMIT_TYPEHASH"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "barFee"
      | "barFeeTo"
      | "bento"
      | "burn"
      | "burnSingle"
      | "decimals"
      | "flashSwap"
      | "getAmountIn"
      | "getAmountOut"
      | "getAssets"
      | "getNativeReserves"
      | "getReserves"
      | "kLast"
      | "masterDeployer"
      | "mint"
      | "name"
      | "nonces"
      | "permit"
      | "poolIdentifier"
      | "price0CumulativeLast"
      | "price1CumulativeLast"
      | "swap"
      | "swapFee"
      | "symbol"
      | "token0"
      | "token1"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "updateBarParameters"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERMIT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "barFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "barFeeTo", values?: undefined): string;
  encodeFunctionData(functionFragment: "bento", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "burnSingle",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "flashSwap",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountIn",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "getAssets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getNativeReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kLast", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "masterDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nonces",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "poolIdentifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price0CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price1CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "swapFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBarParameters",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERMIT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "barFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "barFeeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bento", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnSingle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flashSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAssets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNativeReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kLast", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "masterDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolIdentifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price0CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price1CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBarParameters",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Burn(address,uint256,uint256,address)": EventFragment;
    "Mint(address,uint256,uint256,address)": EventFragment;
    "Swap(address,address,address,uint256,uint256)": EventFragment;
    "Sync(uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  amount: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface BurnEventObject {
  sender: string;
  amount0: BigNumber;
  amount1: BigNumber;
  recipient: string;
}
export type BurnEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface MintEventObject {
  sender: string;
  amount0: BigNumber;
  amount1: BigNumber;
  recipient: string;
}
export type MintEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  MintEventObject
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface SwapEventObject {
  recipient: string;
  tokenIn: string;
  tokenOut: string;
  amountIn: BigNumber;
  amountOut: BigNumber;
}
export type SwapEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface SyncEventObject {
  reserve0: BigNumber;
  reserve1: BigNumber;
}
export type SyncEvent = TypedEvent<[BigNumber, BigNumber], SyncEventObject>;

export type SyncEventFilter = TypedEventFilter<SyncEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  amount: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ConstantProductPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConstantProductPoolInterface;

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
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    barFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    barFeeTo(overrides?: CallOverrides): Promise<[string]>;

    bento(overrides?: CallOverrides): Promise<[string]>;

    burn(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burnSingle(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    flashSwap(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAmountIn(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { finalAmountIn: BigNumber }>;

    getAmountOut(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { finalAmountOut: BigNumber }>;

    getAssets(
      overrides?: CallOverrides
    ): Promise<[string[]] & { assets: string[] }>;

    getNativeReserves(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        _nativeReserve0: BigNumber;
        _nativeReserve1: BigNumber;
        _blockTimestampLast: number;
      }
    >;

    getReserves(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _blockTimestampLast: number;
      }
    >;

    kLast(overrides?: CallOverrides): Promise<[BigNumber]>;

    masterDeployer(overrides?: CallOverrides): Promise<[string]>;

    mint(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    poolIdentifier(overrides?: CallOverrides): Promise<[string]>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;

    swap(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateBarParameters(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  allowance(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  barFee(overrides?: CallOverrides): Promise<BigNumber>;

  barFeeTo(overrides?: CallOverrides): Promise<string>;

  bento(overrides?: CallOverrides): Promise<string>;

  burn(
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burnSingle(
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  flashSwap(
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAmountIn(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAmountOut(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAssets(overrides?: CallOverrides): Promise<string[]>;

  getNativeReserves(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number] & {
      _nativeReserve0: BigNumber;
      _nativeReserve1: BigNumber;
      _blockTimestampLast: number;
    }
  >;

  getReserves(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number] & {
      _reserve0: BigNumber;
      _reserve1: BigNumber;
      _blockTimestampLast: number;
    }
  >;

  kLast(overrides?: CallOverrides): Promise<BigNumber>;

  masterDeployer(overrides?: CallOverrides): Promise<string>;

  mint(
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  permit(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  poolIdentifier(overrides?: CallOverrides): Promise<string>;

  price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

  price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

  swap(
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapFee(overrides?: CallOverrides): Promise<BigNumber>;

  symbol(overrides?: CallOverrides): Promise<string>;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateBarParameters(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    barFee(overrides?: CallOverrides): Promise<BigNumber>;

    barFeeTo(overrides?: CallOverrides): Promise<string>;

    bento(overrides?: CallOverrides): Promise<string>;

    burn(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IPool.TokenAmountStructOutput[]>;

    burnSingle(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    flashSwap(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountIn(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOut(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssets(overrides?: CallOverrides): Promise<string[]>;

    getNativeReserves(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        _nativeReserve0: BigNumber;
        _nativeReserve1: BigNumber;
        _blockTimestampLast: number;
      }
    >;

    getReserves(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _blockTimestampLast: number;
      }
    >;

    kLast(overrides?: CallOverrides): Promise<BigNumber>;

    masterDeployer(overrides?: CallOverrides): Promise<string>;

    mint(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    poolIdentifier(overrides?: CallOverrides): Promise<string>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapFee(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateBarParameters(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      amount?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      amount?: null
    ): ApprovalEventFilter;

    "Burn(address,uint256,uint256,address)"(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      recipient?: PromiseOrValue<string> | null
    ): BurnEventFilter;
    Burn(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      recipient?: PromiseOrValue<string> | null
    ): BurnEventFilter;

    "Mint(address,uint256,uint256,address)"(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      recipient?: PromiseOrValue<string> | null
    ): MintEventFilter;
    Mint(
      sender?: PromiseOrValue<string> | null,
      amount0?: null,
      amount1?: null,
      recipient?: PromiseOrValue<string> | null
    ): MintEventFilter;

    "Swap(address,address,address,uint256,uint256)"(
      recipient?: PromiseOrValue<string> | null,
      tokenIn?: PromiseOrValue<string> | null,
      tokenOut?: PromiseOrValue<string> | null,
      amountIn?: null,
      amountOut?: null
    ): SwapEventFilter;
    Swap(
      recipient?: PromiseOrValue<string> | null,
      tokenIn?: PromiseOrValue<string> | null,
      tokenOut?: PromiseOrValue<string> | null,
      amountIn?: null,
      amountOut?: null
    ): SwapEventFilter;

    "Sync(uint256,uint256)"(reserve0?: null, reserve1?: null): SyncEventFilter;
    Sync(reserve0?: null, reserve1?: null): SyncEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    barFee(overrides?: CallOverrides): Promise<BigNumber>;

    barFeeTo(overrides?: CallOverrides): Promise<BigNumber>;

    bento(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burnSingle(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    flashSwap(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAmountIn(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOut(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssets(overrides?: CallOverrides): Promise<BigNumber>;

    getNativeReserves(overrides?: CallOverrides): Promise<BigNumber>;

    getReserves(overrides?: CallOverrides): Promise<BigNumber>;

    kLast(overrides?: CallOverrides): Promise<BigNumber>;

    masterDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    poolIdentifier(overrides?: CallOverrides): Promise<BigNumber>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapFee(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateBarParameters(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    barFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    barFeeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bento(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burnSingle(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    flashSwap(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAmountIn(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountOut(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNativeReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    masterDeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    poolIdentifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price0CumulativeLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price1CumulativeLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateBarParameters(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
