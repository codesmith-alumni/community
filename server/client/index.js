"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var NotFound_jsx_1 = require("./components/NotFound.jsx");
var store_1 = require("./store");
var SignUp_jsx_1 = require("./components/SignUp.jsx");
var SignOut_jsx_1 = require("./components/SignOut.jsx");
var FeedPage_jsx_1 = require("./containers/FeedPage.jsx");
var Nav_jsx_1 = require("./components/Nav.jsx");
react_dom_1.render(<react_redux_1.Provider store={store_1.default}>
    <react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Route path="*" component={Nav_jsx_1.default}/>
      <react_router_dom_1.Switch>
        <react_router_dom_1.Route exact path="/" component={SignUp_jsx_1.default}/>
        <react_router_dom_1.Route path="/home" component={FeedPage_jsx_1.default}/>
        <react_router_dom_1.Route path="/signout" component={SignOut_jsx_1.default}/>
        <react_router_dom_1.Route component={NotFound_jsx_1.default}/>
      </react_router_dom_1.Switch>
      
    </react_router_dom_1.BrowserRouter>
  </react_redux_1.Provider>, document.getElementById('root'));
//# sourceMappingURL=index.js.map