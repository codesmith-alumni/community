import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './components/NotFound.jsx';
import Store from './store';
import App from './components/App.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import SignOut from './components/SignOut.jsx';
import FeedPage from './containers/FeedPage.jsx';
import Nav from './components/Nav.jsx';

render(
  <Provider store={Store}>
    <Router>
      <Route path="*" component={Nav} />
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignOut" component={SignOut} />
        <Route component={NotFound} />
      </Switch>
      {/* <Route path="*" component={Footer} /> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);
