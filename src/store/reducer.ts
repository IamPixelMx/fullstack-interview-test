import { StateTypes, DispatchType } from "./types";
import {
  FETCH_START,
  FETCH_END,
  SHOW_ALERT,
  CLEAR_ALERT,
  SET_BRANCH,
  SET_COMMIT,
} from "./constants";

const reducer = (state: StateTypes, { type, payload = {} }: DispatchType) => {
  switch (type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_END:
      return {
        ...state,
        loading: false,
      };

    case SHOW_ALERT:
      return {
        ...state,
        loading: false,
        alertStatus: payload.status,
        alertText: payload.text,
      };

    case CLEAR_ALERT:
      return {
        ...state,
        alertStatus: "",
        alertText: "",
      };

    case SET_BRANCH:
      return {
        ...state,
        currentBranch: payload,
      };

    case SET_COMMIT:
      return {
        ...state,
        currentCommit: payload,
      };

    default:
      throw new Error();
  }
};

export default reducer;
