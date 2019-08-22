"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("../constants/types");
var defaultStore = [
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
var postsReducer = function (store, action) {
    if (store === void 0) { store = defaultStore; }
    var storeCopy = JSON.parse(JSON.stringify(store));
    switch (action.type) {
        case types.TOGGLE:
            var index = action.payload;
            storeCopy[index]["isOpen"] = !storeCopy[index]["isOpen"];
            return storeCopy;
        case types.UPDATE_POSTS:
            if (action.payload.length === 0) {
                return defaultStore;
            }
            return action.payload;
        default:
            return store;
    }
};
exports.default = postsReducer;
//# sourceMappingURL=postsReducer.js.map