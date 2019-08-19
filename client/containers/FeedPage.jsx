import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggle } from "../actions/toggle";
import   Search   from "../containers/Search.jsx"
import Feed from "../containers/Feed.jsx"

const FeedPageStyles = styled.div`
  background-color: lightcoral;
  height: 150px;
  width: 100%;
  border: solid;

`;

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  togglePost: index => dispatch(toggle(index))
});
class FeedPage extends React.Component {
  render() {
    return (
        <FeedPageStyles>
          Feed I am the feed page.
        <Search/>
        <Feed/>
          <h1>value of toggled: {this.props.posts[0].isOpen.toString()}</h1>
          <button onClick={index => this.props.togglePost(0)}> toggle</button>
        </FeedPageStyles>

    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPage);
