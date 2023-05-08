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
  PayableOverrides,
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
} from "../../common";

export declare namespace IFuroVesting {
  export type VestParamsStruct = {
    token: PromiseOrValue<string>;
    recipient: PromiseOrValue<string>;
    start: PromiseOrValue<BigNumberish>;
    cliffDuration: PromiseOrValue<BigNumberish>;
    stepDuration: PromiseOrValue<BigNumberish>;
    steps: PromiseOrValue<BigNumberish>;
    stepPercentage: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    fromBentoBox: PromiseOrValue<boolean>;
  };

  export type VestParamsStructOutput = [
    string,
    string,
    number,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    token: string;
    recipient: string;
    start: number;
    cliffDuration: number;
    stepDuration: number;
    steps: number;
    stepPercentage: BigNumber;
    amount: BigNumber;
    fromBentoBox: boolean;
  };
}

export interface IFuroVestingInterface extends utils.Interface {
  functions: {
    "createVesting((address,address,uint32,uint32,uint32,uint32,uint128,uint128,bool))": FunctionFragment;
    "setBentoBoxApproval(address,bool,uint8,bytes32,bytes32)": FunctionFragment;
    "stopVesting(uint256,bool)": FunctionFragment;
    "updateOwner(uint256,address)": FunctionFragment;
    "vestBalance(uint256)": FunctionFragment;
    "withdraw(uint256,bytes,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createVesting"
      | "setBentoBoxApproval"
      | "stopVesting"
      | "updateOwner"
      | "vestBalance"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createVesting",
    values: [IFuroVesting.VestParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setBentoBoxApproval",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stopVesting",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "vestBalance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "createVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBentoBoxApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "CancelVesting(uint256,uint256,uint256,address,bool)": EventFragment;
    "CreateVesting(uint256,address,address,address,uint32,uint32,uint32,uint32,uint128,uint128,bool)": EventFragment;
    "LogUpdateOwner(uint256,address)": EventFragment;
    "Withdraw(uint256,address,uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelVesting"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateVesting"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUpdateOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface CancelVestingEventObject {
  vestId: BigNumber;
  ownerAmount: BigNumber;
  recipientAmount: BigNumber;
  token: string;
  toBentoBox: boolean;
}
export type CancelVestingEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, boolean],
  CancelVestingEventObject
>;

export type CancelVestingEventFilter = TypedEventFilter<CancelVestingEvent>;

export interface CreateVestingEventObject {
  vestId: BigNumber;
  token: string;
  owner: string;
  recipient: string;
  start: number;
  cliffDuration: number;
  stepDuration: number;
  steps: number;
  cliffShares: BigNumber;
  stepShares: BigNumber;
  fromBentoBox: boolean;
}
export type CreateVestingEvent = TypedEvent<
  [
    BigNumber,
    string,
    string,
    string,
    number,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    boolean
  ],
  CreateVestingEventObject
>;

export type CreateVestingEventFilter = TypedEventFilter<CreateVestingEvent>;

export interface LogUpdateOwnerEventObject {
  vestId: BigNumber;
  newOwner: string;
}
export type LogUpdateOwnerEvent = TypedEvent<
  [BigNumber, string],
  LogUpdateOwnerEventObject
>;

export type LogUpdateOwnerEventFilter = TypedEventFilter<LogUpdateOwnerEvent>;

export interface WithdrawEventObject {
  vestId: BigNumber;
  token: string;
  amount: BigNumber;
  toBentoBox: boolean;
}
export type WithdrawEvent = TypedEvent<
  [BigNumber, string, BigNumber, boolean],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface IFuroVesting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFuroVestingInterface;

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
    createVesting(
      vestParams: IFuroVesting.VestParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBentoBoxApproval(
      user: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stopVesting(
      vestId: PromiseOrValue<BigNumberish>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateOwner(
      vestId: PromiseOrValue<BigNumberish>,
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vestBalance(
      vestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      vestId: PromiseOrValue<BigNumberish>,
      taskData: PromiseOrValue<BytesLike>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createVesting(
    vestParams: IFuroVesting.VestParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBentoBoxApproval(
    user: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stopVesting(
    vestId: PromiseOrValue<BigNumberish>,
    toBentoBox: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateOwner(
    vestId: PromiseOrValue<BigNumberish>,
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vestBalance(
    vestId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    vestId: PromiseOrValue<BigNumberish>,
    taskData: PromiseOrValue<BytesLike>,
    toBentoBox: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createVesting(
      vestParams: IFuroVesting.VestParamsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        depositedShares: BigNumber;
        vestId: BigNumber;
        stepShares: BigNumber;
        cliffShares: BigNumber;
      }
    >;

    setBentoBoxApproval(
      user: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    stopVesting(
      vestId: PromiseOrValue<BigNumberish>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOwner(
      vestId: PromiseOrValue<BigNumberish>,
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    vestBalance(
      vestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      vestId: PromiseOrValue<BigNumberish>,
      taskData: PromiseOrValue<BytesLike>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CancelVesting(uint256,uint256,uint256,address,bool)"(
      vestId?: PromiseOrValue<BigNumberish> | null,
      ownerAmount?: PromiseOrValue<BigNumberish> | null,
      recipientAmount?: PromiseOrValue<BigNumberish> | null,
      token?: null,
      toBentoBox?: null
    ): CancelVestingEventFilter;
    CancelVesting(
      vestId?: PromiseOrValue<BigNumberish> | null,
      ownerAmount?: PromiseOrValue<BigNumberish> | null,
      recipientAmount?: PromiseOrValue<BigNumberish> | null,
      token?: null,
      toBentoBox?: null
    ): CancelVestingEventFilter;

    "CreateVesting(uint256,address,address,address,uint32,uint32,uint32,uint32,uint128,uint128,bool)"(
      vestId?: PromiseOrValue<BigNumberish> | null,
      token?: null,
      owner?: PromiseOrValue<string> | null,
      recipient?: PromiseOrValue<string> | null,
      start?: null,
      cliffDuration?: null,
      stepDuration?: null,
      steps?: null,
      cliffShares?: null,
      stepShares?: null,
      fromBentoBox?: null
    ): CreateVestingEventFilter;
    CreateVesting(
      vestId?: PromiseOrValue<BigNumberish> | null,
      token?: null,
      owner?: PromiseOrValue<string> | null,
      recipient?: PromiseOrValue<string> | null,
      start?: null,
      cliffDuration?: null,
      stepDuration?: null,
      steps?: null,
      cliffShares?: null,
      stepShares?: null,
      fromBentoBox?: null
    ): CreateVestingEventFilter;

    "LogUpdateOwner(uint256,address)"(
      vestId?: PromiseOrValue<BigNumberish> | null,
      newOwner?: PromiseOrValue<string> | null
    ): LogUpdateOwnerEventFilter;
    LogUpdateOwner(
      vestId?: PromiseOrValue<BigNumberish> | null,
      newOwner?: PromiseOrValue<string> | null
    ): LogUpdateOwnerEventFilter;

    "Withdraw(uint256,address,uint256,bool)"(
      vestId?: PromiseOrValue<BigNumberish> | null,
      token?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      toBentoBox?: null
    ): WithdrawEventFilter;
    Withdraw(
      vestId?: PromiseOrValue<BigNumberish> | null,
      token?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      toBentoBox?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    createVesting(
      vestParams: IFuroVesting.VestParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBentoBoxApproval(
      user: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stopVesting(
      vestId: PromiseOrValue<BigNumberish>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateOwner(
      vestId: PromiseOrValue<BigNumberish>,
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vestBalance(
      vestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      vestId: PromiseOrValue<BigNumberish>,
      taskData: PromiseOrValue<BytesLike>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createVesting(
      vestParams: IFuroVesting.VestParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBentoBoxApproval(
      user: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stopVesting(
      vestId: PromiseOrValue<BigNumberish>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateOwner(
      vestId: PromiseOrValue<BigNumberish>,
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vestBalance(
      vestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      vestId: PromiseOrValue<BigNumberish>,
      taskData: PromiseOrValue<BytesLike>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
