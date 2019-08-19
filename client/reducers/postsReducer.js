import * as types from "../constants/types";

const defaultStore = [
  {
    company: "Facebook",
    username: "Camera",
    details: "It went amazing, i got the job!"
  }
];

// example action
// {
//   type: types.COLLAPSE
//   payload:
// }

const postsReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case types.COLLAPSE:
      return store;
    default:
      return store;
  }
};

export default postsReducer;
