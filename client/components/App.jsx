// import { hot } from "react-hot-loader/root";
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FeedPage from '../containers/FeedPage';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/signUp/" component={SignUp} />
      <Route path="/feed/" component={FeedPage} />
    </Router>
  );
};

export default App;
