import * as types from "../constants/types";

export const toggle = index => ({
  type: types.TOGGLE,
  payload: index
});

export const updatePosts = posts => ({
  type: types.UPDATE_POSTS,
  payload: posts
});
