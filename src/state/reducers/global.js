import { ACTION } from "utils/constants";

const globalReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION.START:
      return {
        ...state,
        isLoading: true
      };

    case ACTION.END:
      return {
        ...state,
        isLoading: false
      };

    case ACTION.NAV_STATE_CHANGE:
      return {
        ...state,
        isNavOpened: payload.state
      };

    case ACTION.RECORD_STATUS_CHANGE:
      return {
        ...state,
        recordingStatus: payload.state
      };

    default:
      return state;
  };
};

export default globalReducer;