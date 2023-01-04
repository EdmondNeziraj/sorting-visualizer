import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_CURRENT_SWAP = "SET_CURRENT_SWAP";
export const setCurrentSwap = createAction(SET_CURRENT_SWAP);

export const currentSwap = handleActions({
  SET_CURRENT_SWAP: (state, { payload }) => {
    if (payload.length) {
      return state.concat(payload);
    } else {
      return [];
    }
  },
}, initialState);