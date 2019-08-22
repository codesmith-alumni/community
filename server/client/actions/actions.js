"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("../constants/types");
exports.toggle = function (index) { return ({
    type: types.TOGGLE,
    payload: index
}); };
exports.updatePosts = function (posts) { return ({
    type: types.UPDATE_POSTS,
    payload: posts
}); };
//# sourceMappingURL=actions.js.map