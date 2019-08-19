import * as types from "../constants/types";

export const toggle = index => ({
  type: types.TOGGLE,
  payload: index
});
