"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var ReviewStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: white;\n  height: 50px;\n  width: 100%;\n  border: solid;\n\n"], ["\n  background-color: white;\n  height: 50px;\n  width: 100%;\n  border: solid;\n\n"])));
var Review = /** @class */ (function (_super) {
    __extends(Review, _super);
    function Review(props) {
        return _super.call(this, props) || this;
    }
    Review.prototype.render = function () {
        return (<ReviewStyles>
         Company: {this.props.company}
         Username: {this.props.username}
         Details: {this.props.details}
        </ReviewStyles>);
    };
    return Review;
}(react_1.default.Component));
exports.default = Review;
var templateObject_1;
//# sourceMappingURL=Review.js.map