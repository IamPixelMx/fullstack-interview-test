import { useContext } from "react";
import { AppContext } from "store";
import type { ShowAlertPayloadType } from "./types";

import {
  FETCH_START,
  FETCH_END,
  SHOW_ALERT,
  CLEAR_ALERT,
  SET_BRANCH,
  SET_COMMIT,
} from "./constants";

const useStore = () => useContext(AppContext);

const useActions = () => {
  const { dispatch } = useStore();

  return {
    fetchStart: () =>
      dispatch({
        type: FETCH_START,
      }),

    fetchEnd: () =>
      dispatch({
        type: FETCH_END,
      }),

    showAlert: (payload: ShowAlertPayloadType) =>
      dispatch({
        type: SHOW_ALERT,
        payload,
      }),

    clearAlert: () =>
      dispatch({
        type: CLEAR_ALERT,
      }),

    setBranch: (payload: string) =>
      dispatch({
        type: SET_BRANCH,
        payload,
      }),

    setCommit: (payload: string) =>
      dispatch({
        type: SET_COMMIT,
        payload,
      }),
  };
};

export { useStore, useActions };
