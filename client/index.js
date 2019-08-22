import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './components/NotFound.jsx';
import Store from './store';
import SignUp from './components/SignUp.jsx';
import SignOut from './components/SignOut.jsx';
import FeedPage from './containers/FeedPage.jsx';
import Nav from './components/Nav.jsx';
import css from './src/reset.css';


render(
  <Provider store={Store}>
    <Router>
      <Route path="*" component={Nav} />
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/home" component={FeedPage} />
        <Route path="/signout" component={SignOut} />
        <Route component={NotFound} />
      </Switch>
      {/* <Route path="*" component={Footer} /> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);
