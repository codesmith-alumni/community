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
var react_redux_1 = require("react-redux");
var styled_components_1 = require("styled-components");
var actions_1 = require("../actions/actions");
var Search_jsx_1 = require("../containers/Search.jsx");
var Feed_jsx_1 = require("../containers/Feed.jsx");
var Composer_jsx_1 = require("./Composer.jsx");
var FeedPageStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: lightskyblue;\n  height: 100vh;\n  width: 100vw;\n  \n"], ["\n  background-color: lightskyblue;\n  height: 100vh;\n  width: 100vw;\n  \n"])));
var mapStateToProps = function (store) { return ({
    posts: store.posts,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    togglePost: function (index) { return dispatch(actions_1.toggle(index)); },
    updatePosts: function (posts) { return dispatch(actions_1.updatePosts(posts)); },
}); };
var FeedPage = /** @class */ (function (_super) {
    __extends(FeedPage, _super);
    function FeedPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.handleReview = _this.handleReview.bind(_this);
        return _this;
    }
    FeedPage.prototype.handleSearch = function (searchTerm) {
        console.log('handleSearch');
        this.getPosts(searchTerm);
    };
    FeedPage.prototype.getPosts = function (searchTerm) {
        var _this = this;
        var path = searchTerm ? "/posts/" + searchTerm : "/posts/";
        fetch(path)
            .then(function (response) { return response.json(); })
            .then(function (response) {
            var posts = [];
            response.forEach(function (item) {
                posts.push({
                    isOpen: false,
                    company: item.company,
                    details: item.content,
                    username: item.user_id
                });
            });
            return _this.props.updatePosts(posts);
        })
            .catch(function (err) { return console.log(err); });
    };
    FeedPage.prototype.handleReview = function (reviewCompany, reviewText) {
        console.log('handleReview');
        this.sendReview(reviewCompany, reviewText);
    };
    //Need to include user_id in body in fetch request below -> body: JSON.stringify()
    FeedPage.prototype.sendReview = function (reviewCompany, reviewText, getPosts) {
        console.log(reviewCompany, reviewText);
        var path = reviewCompany && reviewText ? "/posts" : "/posts/";
        fetch(path, { method: 'POST', body: JSON.stringify({ company: reviewCompany, content: reviewText }) })
            .then(getPosts)
            .catch(function (err) { return console.log(err); });
    };
    FeedPage.prototype.handleSearch = function (searchTerm) {
        console.log('handleSearch');
        this.getPosts(searchTerm);
    };
    FeedPage.prototype.componentDidMount = function () {
        this.getPosts();
    };
    FeedPage.prototype.render = function () {
        return (<FeedPageStyles>
          Stream
        <Search_jsx_1.default handleSearch={this.handleSearch}/>
        <Composer_jsx_1.default handleReview={this.handleReview}/>
        <Feed_jsx_1.default posts={this.props.posts}/>
        
        </FeedPageStyles>);
    };
    return FeedPage;
}(react_1.default.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FeedPage);
var templateObject_1;
//# sourceMappingURL=FeedPage.js.map