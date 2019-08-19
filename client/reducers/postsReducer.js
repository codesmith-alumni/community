import * as types from "../constants/types";

const defaultStore = [
  {
    company: "Facebook",
    username: "Camera",
    details: "It went amazing, i got the job!",
    isOpen: false
  },
  {
    company: "google",
    username: "Abby",
    details: "It was super!",
    isOpen: false
  }
];

// example action
// {
//   type: types.COLLAPSE
//   payload:
// }

const postsReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case types.TOGGLE:
      const storeCopy = JSON.parse(JSON.stringify(store));
      const index = action.payload;
      storeCopy[index]["isOpen"] = !storeCopy[index]["isOpen"];
      return storeCopy;
    default:
      return store;
  }
};

export default postsReducer;
