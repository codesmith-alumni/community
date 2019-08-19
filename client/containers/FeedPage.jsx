import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  posts: state.posts
});

class FeedPage extends React.Component {
  render() {
    console.log("posts:", this.props.posts);
    return <div>I am the feed page.</div>;
  }
}

export default connect(
  mapStateToProps,
  null
)(FeedPage);
