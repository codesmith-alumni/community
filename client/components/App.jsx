// import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import FeedPage from "../containers/FeedPage.jsx";
class App extends React.Component {
  render() {
    return (
      <div>
        Hello world!
        <FeedPage />
      </div>
    );
  }
}

export default App;
