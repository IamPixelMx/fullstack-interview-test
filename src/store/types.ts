export type StoreTypes = {
  state: StateTypes;
  dispatch: React.Dispatch<DispatchType>;
};

export type DispatchType = {
  type: string;
  payload?: any;
};

export type StateTypes = {
  currentBranch: string;
  currentCommit: string;
  loading: boolean;
  alertText: string;
  alertStatus: string;
};

export type ShowAlertPayloadType = {
  text: string;
  status: string;
};
