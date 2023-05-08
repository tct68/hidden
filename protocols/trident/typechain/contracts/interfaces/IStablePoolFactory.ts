/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface IStablePoolFactoryInterface extends utils.Interface {
  functions: {
    "getDeployData()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getDeployData"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getDeployData",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getDeployData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IStablePoolFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStablePoolFactoryInterface;

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
    getDeployData(overrides?: CallOverrides): Promise<[string, string]>;
  };

  getDeployData(overrides?: CallOverrides): Promise<[string, string]>;

  callStatic: {
    getDeployData(overrides?: CallOverrides): Promise<[string, string]>;
  };

  filters: {};

  estimateGas: {
    getDeployData(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getDeployData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
