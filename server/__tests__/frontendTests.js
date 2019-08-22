"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var Review_1 = require("../client/containers/Review");
var Feed_1 = require("../client/containers/Feed");
var Composer_1 = require("../client/containers/Composer");
describe('Review tests', function () {
    it('render correctly', function () {
        var props = { company: 'Google', username: 'Camera', details: 'Crushed it!' };
        var component = react_test_renderer_1.default.create(<Review_1.default {...props}/>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});
describe('Feed tests', function () {
    it('render correctly', function () {
        var posts = [{ company: 'Google', username: 'Camera', details: 'Crushed it!' }];
        var component = react_test_renderer_1.default.create(<Feed_1.default posts={posts}/>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});
describe('Composer tests', function () {
    it('render correctly', function () {
        var component = react_test_renderer_1.default.create(<Composer_1.default />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});
//# sourceMappingURL=frontendTests.js.map