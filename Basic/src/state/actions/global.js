import { ACTION } from "utils/constants";

export const setNavOpened = dispatch => (state = false) => {
  dispatch({ type: ACTION.NAV_STATE_CHANGE, payload: { state } });
};