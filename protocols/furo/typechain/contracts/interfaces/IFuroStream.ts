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

export declare namespace IFuroStream {
  export type StreamStruct = {
    sender: PromiseOrValue<string>;
    token: PromiseOrValue<string>;
    depositedShares: PromiseOrValue<BigNumberish>;
    withdrawnShares: PromiseOrValue<BigNumberish>;
    startTime: PromiseOrValue<BigNumberish>;
    endTime: PromiseOrValue<BigNumberish>;
  };

  export type StreamStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    sender: string;
    token: string;
    depositedShares: BigNumber;
    withdrawnShares: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
  };
}

export interface IFuroStreamInterface extends utils.Interface {
  functions: {
    "cancelStream(uint256,bool)": FunctionFragment;
    "createStream(address,address,uint64,uint64,uint256,bool)": FunctionFragment;
    "getStream(uint256)": FunctionFragment;
    "setBentoBoxApproval(address,bool,uint8,bytes32,bytes32)": FunctionFragment;
    "streamBalanceOf(uint256)": FunctionFragment;
    "updateSender(uint256,address)": FunctionFragment;
    "updateStream(uint256,uint128,uint64,bool)": FunctionFragment;
    "withdrawFromStream(uint256,uint256,address,bool,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelStream"
      | "createStream"
      | "getStream"
      | "setBentoBoxApproval"
      | "streamBalanceOf"
      | "updateSender"
      | "updateStream"
      | "withdrawFromStream"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelStream",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "createStream",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getStream",
    values: [PromiseOrValue<BigNumberish>]
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
    functionFragment: "streamBalanceOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSender",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStream",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFromStream",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelStream",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createStream",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStream", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBentoBoxApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "streamBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStream",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFromStream",
    data: BytesLike
  ): Result;

  events: {
    "CancelStream(uint256,uint256,uint256,address,bool)": EventFragment;
    "CreateStream(uint256,address,address,address,uint256,uint256,uint256,bool)": EventFragment;
    "UpdateStream(uint256,uint128,uint64,bool)": EventFragment;
    "Withdraw(uint256,uint256,address,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelStream"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateStream"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateStream"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface CancelStreamEventObject {
  streamId: BigNumber;
  senderBalance: BigNumber;
  recipientBalance: BigNumber;
  token: string;
  toBentoBox: boolean;
}
export type CancelStreamEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, boolean],
  CancelStreamEventObject
>;

export type CancelStreamEventFilter = TypedEventFilter<CancelStreamEvent>;

export interface CreateStreamEventObject {
  streamId: BigNumber;
  sender: string;
  recipient: string;
  token: string;
  amount: BigNumber;
  startTime: BigNumber;
  endTime: BigNumber;
  fromBentoBox: boolean;
}
export type CreateStreamEvent = TypedEvent<
  [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber, boolean],
  CreateStreamEventObject
>;

export type CreateStreamEventFilter = TypedEventFilter<CreateStreamEvent>;

export interface UpdateStreamEventObject {
  streamId: BigNumber;
  topUpAmount: BigNumber;
  extendTime: BigNumber;
  fromBentoBox: boolean;
}
export type UpdateStreamEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, boolean],
  UpdateStreamEventObject
>;

export type UpdateStreamEventFilter = TypedEventFilter<UpdateStreamEvent>;

export interface WithdrawEventObject {
  streamId: BigNumber;
  sharesToWithdraw: BigNumber;
  withdrawTo: string;
  token: string;
  toBentoBox: boolean;
}
export type WithdrawEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, boolean],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface IFuroStream extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFuroStreamInterface;

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
    cancelStream(
      streamId: PromiseOrValue<BigNumberish>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createStream(
      recipient: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      startTime: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      fromBento: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getStream(
      streamId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IFuroStream.StreamStructOutput]>;

    setBentoBoxApproval(
      user: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    streamBalanceOf(
      streamId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        senderBalance: BigNumber;
        recipientBalance: BigNumber;
      }
    >;

    updateSender(
      streamId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateStream(
      streamId: PromiseOrValue<BigNumberish>,
      topUpAmount: PromiseOrValue<BigNumberish>,
      extendTime: PromiseOrValue<BigNumberish>,
      fromBentoBox: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFromStream(
      streamId: PromiseOrValue<BigNumberish>,
      sharesToWithdraw: PromiseOrValue<BigNumberish>,
      withdrawTo: PromiseOrValue<string>,
      toBentoBox: PromiseOrValue<boolean>,
      taskData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancelStream(
    streamId: PromiseOrValue<BigNumberish>,
    toBentoBox: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createStream(
    recipient: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    startTime: PromiseOrValue<BigNumberish>,
    endTime: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    fromBento: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getStream(
    streamId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IFuroStream.StreamStructOutput>;

  setBentoBoxApproval(
    user: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  streamBalanceOf(
    streamId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      senderBalance: BigNumber;
      recipientBalance: BigNumber;
    }
  >;

  updateSender(
    streamId: PromiseOrValue<BigNumberish>,
    sender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateStream(
    streamId: PromiseOrValue<BigNumberish>,
    topUpAmount: PromiseOrValue<BigNumberish>,
    extendTime: PromiseOrValue<BigNumberish>,
    fromBentoBox: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFromStream(
    streamId: PromiseOrValue<BigNumberish>,
    sharesToWithdraw: PromiseOrValue<BigNumberish>,
    withdrawTo: PromiseOrValue<string>,
    toBentoBox: PromiseOrValue<boolean>,
    taskData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelStream(
      streamId: PromiseOrValue<BigNumberish>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        senderBalance: BigNumber;
        recipientBalance: BigNumber;
      }
    >;

    createStream(
      recipient: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      startTime: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      fromBento: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        streamId: BigNumber;
        depositedShares: BigNumber;
      }
    >;

    getStream(
      streamId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IFuroStream.StreamStructOutput>;

    setBentoBoxApproval(
      user: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    streamBalanceOf(
      streamId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        senderBalance: BigNumber;
        recipientBalance: BigNumber;
      }
    >;

    updateSender(
      streamId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateStream(
      streamId: PromiseOrValue<BigNumberish>,
      topUpAmount: PromiseOrValue<BigNumberish>,
      extendTime: PromiseOrValue<BigNumberish>,
      fromBentoBox: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawFromStream(
      streamId: PromiseOrValue<BigNumberish>,
      sharesToWithdraw: PromiseOrValue<BigNumberish>,
      withdrawTo: PromiseOrValue<string>,
      toBentoBox: PromiseOrValue<boolean>,
      taskData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { recipientBalance: BigNumber; to: string }
    >;
  };

  filters: {
    "CancelStream(uint256,uint256,uint256,address,bool)"(
      streamId?: PromiseOrValue<BigNumberish> | null,
      senderBalance?: PromiseOrValue<BigNumberish> | null,
      recipientBalance?: PromiseOrValue<BigNumberish> | null,
      token?: null,
      toBentoBox?: null
    ): CancelStreamEventFilter;
    CancelStream(
      streamId?: PromiseOrValue<BigNumberish> | null,
      senderBalance?: PromiseOrValue<BigNumberish> | null,
      recipientBalance?: PromiseOrValue<BigNumberish> | null,
      token?: null,
      toBentoBox?: null
    ): CancelStreamEventFilter;

    "CreateStream(uint256,address,address,address,uint256,uint256,uint256,bool)"(
      streamId?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      recipient?: PromiseOrValue<string> | null,
      token?: null,
      amount?: null,
      startTime?: null,
      endTime?: null,
      fromBentoBox?: null
    ): CreateStreamEventFilter;
    CreateStream(
      streamId?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      recipient?: PromiseOrValue<string> | null,
      token?: null,
      amount?: null,
      startTime?: null,
      endTime?: null,
      fromBentoBox?: null
    ): CreateStreamEventFilter;

    "UpdateStream(uint256,uint128,uint64,bool)"(
      streamId?: PromiseOrValue<BigNumberish> | null,
      topUpAmount?: PromiseOrValue<BigNumberish> | null,
      extendTime?: PromiseOrValue<BigNumberish> | null,
      fromBentoBox?: null
    ): UpdateStreamEventFilter;
    UpdateStream(
      streamId?: PromiseOrValue<BigNumberish> | null,
      topUpAmount?: PromiseOrValue<BigNumberish> | null,
      extendTime?: PromiseOrValue<BigNumberish> | null,
      fromBentoBox?: null
    ): UpdateStreamEventFilter;

    "Withdraw(uint256,uint256,address,address,bool)"(
      streamId?: PromiseOrValue<BigNumberish> | null,
      sharesToWithdraw?: PromiseOrValue<BigNumberish> | null,
      withdrawTo?: PromiseOrValue<string> | null,
      token?: null,
      toBentoBox?: null
    ): WithdrawEventFilter;
    Withdraw(
      streamId?: PromiseOrValue<BigNumberish> | null,
      sharesToWithdraw?: PromiseOrValue<BigNumberish> | null,
      withdrawTo?: PromiseOrValue<string> | null,
      token?: null,
      toBentoBox?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    cancelStream(
      streamId: PromiseOrValue<BigNumberish>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createStream(
      recipient: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      startTime: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      fromBento: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getStream(
      streamId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBentoBoxApproval(
      user: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    streamBalanceOf(
      streamId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateSender(
      streamId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateStream(
      streamId: PromiseOrValue<BigNumberish>,
      topUpAmount: PromiseOrValue<BigNumberish>,
      extendTime: PromiseOrValue<BigNumberish>,
      fromBentoBox: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFromStream(
      streamId: PromiseOrValue<BigNumberish>,
      sharesToWithdraw: PromiseOrValue<BigNumberish>,
      withdrawTo: PromiseOrValue<string>,
      toBentoBox: PromiseOrValue<boolean>,
      taskData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelStream(
      streamId: PromiseOrValue<BigNumberish>,
      toBentoBox: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createStream(
      recipient: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      startTime: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      fromBento: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getStream(
      streamId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBentoBoxApproval(
      user: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    streamBalanceOf(
      streamId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateSender(
      streamId: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateStream(
      streamId: PromiseOrValue<BigNumberish>,
      topUpAmount: PromiseOrValue<BigNumberish>,
      extendTime: PromiseOrValue<BigNumberish>,
      fromBentoBox: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFromStream(
      streamId: PromiseOrValue<BigNumberish>,
      sharesToWithdraw: PromiseOrValue<BigNumberish>,
      withdrawTo: PromiseOrValue<string>,
      toBentoBox: PromiseOrValue<boolean>,
      taskData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
