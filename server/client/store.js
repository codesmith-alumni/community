"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var combinedReducers_1 = require("./reducers/combinedReducers");
exports.default = redux_1.createStore(combinedReducers_1.default);
//# sourceMappingURL=store.js.map