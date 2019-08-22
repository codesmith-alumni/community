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
var Review_jsx_1 = require("../containers/Review.jsx");
var FeedStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 550px;\n  width: 100%;\n  border: solid;\n\n\n"], ["\n  height: 550px;\n  width: 100%;\n  border: solid;\n\n\n"])));
var Feed = /** @class */ (function (_super) {
    __extends(Feed, _super);
    function Feed(props) {
        return _super.call(this, props) || this;
    }
    Feed.prototype.render = function () {
        var contents = [];
        var posts = this.props.posts;
        posts.forEach(function (item, index) {
            contents.push(<Review_jsx_1.default {...item} key={index}/>);
        });
        return (<FeedStyles>
          {contents}
        </FeedStyles>);
    };
    return Feed;
}(react_1.default.Component));
exports.default = Feed;
var templateObject_1;
// const Feed = ({className, posts}) => {
//   const [posts, setPosts] = useState('')
//   const contents = []
//   // const {posts} = this.props
//   posts.forEach((item, index) => {
//     contents.push(<Review {...item} key = {index}/>)
//     setPosts(contents)
//   })
//   return(
//     <FeedStyles>
//      {contents}
//     </FeedStyles>
//   )
// }
//# sourceMappingURL=Feed.js.map