"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var NavStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  width: 100%;\n  height: 40px;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  background-color: orange;\n"], ["\n  margin: 0;\n  width: 100%;\n  height: 40px;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  background-color: orange;\n"])));
var NavTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 30px;\n  font-weight: bold;\n"], ["\n  font-size: 30px;\n  font-weight: bold;\n"])));
var NavMenuEntry = styled_components_1.default.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  padding: 8px 15px;\n  text-decoration: none;\n  font-weight: bold;\n  color: orange;\n  border-right: 1px solid #ccc;\n"], ["\n  display: block;\n  padding: 8px 15px;\n  text-decoration: none;\n  font-weight: bold;\n  color: orange;\n  border-right: 1px solid #ccc;\n"])));
var Nav = function (_a) {
    var classNames = _a.classNames, location = _a.location;
    return (<>
      <NavStyles id="Nav">
        <NavTitle>STREAM</NavTitle>
        <NavMenuEntry>
          {location.pathname !== '/' &&
        <button type="button">
              <react_router_dom_1.Link to="/SignOut">Sign out</react_router_dom_1.Link>
            </button>}
        </NavMenuEntry>
      </NavStyles>
    </>);
};
exports.default = Nav;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Nav.js.map