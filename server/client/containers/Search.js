"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var SearchStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  border: solid;\n  height: 50px;\n  width: 100%;\n\n"], ["\n\n  border: solid;\n  height: 50px;\n  width: 100%;\n\n"])));
var Search = function (_a) {
    var handleSearch = _a.handleSearch, className = _a.className;
    var _b = react_1.useState(''), search = _b[0], setSearch = _b[1];
    var onChange = function (e) {
        setSearch(e.target.value);
    };
    return (<SearchStyles>
  Search Stream
  (Search is case sensitive)
          <input value={search} onChange={onChange}></input>
          <input type='button' value='Search' onClick={function () { return handleSearch(search); }}></input>

        </SearchStyles>);
};
exports.default = Search;
var templateObject_1;
//# sourceMappingURL=Search.js.map