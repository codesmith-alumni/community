"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var ComposerStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nborder: solid;\n\n"], ["\nborder: solid;\n\n"])));
var Composer = function (_a) {
    var handleReview = _a.handleReview, className = _a.className;
    var _b = react_1.useState(''), text = _b[0], setText = _b[1];
    var _c = react_1.useState(''), company = _c[0], setCompany = _c[1];
    var onReviewChange = function (e) {
        setText(e.target.value);
    };
    var onCompanyChange = function (e) {
        setCompany(e.target.value);
    };
    var onClick = function (e) {
        setCompany(e.target.value);
        console.log(company);
    };
    return (<ComposerStyle>
      <label htmlFor="Company"> Company </label>
      <br />
      <input id="Company" value={company} onChange={onCompanyChange}></input>
      <br />
      <label htmlFor="Review"> Review </label>
      <br />
      <textarea id="Review" rows="4" cols="50" placeholder='Review goes here' value={text} onChange={onReviewChange}/>
      <br />
      <input type='button' value="Submit" onClick={function () { return handleReview(company, text); }}></input> 
    </ComposerStyle>);
};
exports.default = Composer;
var templateObject_1;
//# sourceMappingURL=Composer.js.map