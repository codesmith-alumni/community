"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var postsReducer_1 = require("./postsReducer");
exports.default = redux_1.combineReducers({
    posts: postsReducer_1.default
});
//# sourceMappingURL=combinedReducers.js.map