import * as types from "../constants/types";

const defaultStore = 
[
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
  const storeCopy = JSON.parse(JSON.stringify(store));
  switch (action.type) {
    case types.TOGGLE:
      const index = action.payload;
      storeCopy[index]["isOpen"] = !storeCopy[index]["isOpen"];
      return storeCopy;
    case types.UPDATE_POSTS:
      if(action.payload.length === 0){
        return defaultStore
      } 
    
      return action.payload

    
    default:
      return store;
  }
};

export default postsReducer;
