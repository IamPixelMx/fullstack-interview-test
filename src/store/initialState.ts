import type { StateTypes } from "./types";

const initialState: StateTypes = {
  currentBranch: "",
  currentCommit: "",
  loading: false,
  alertText: "",
  alertStatus: "",
};

export default initialState;
