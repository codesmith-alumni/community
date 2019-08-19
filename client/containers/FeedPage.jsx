import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggle } from "../actions/toggle";

const FeedPageStyles = styled.div`
  background-color: blue;
  height: 150px;
  width: 100%;
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
      <div>
        <FeedPageStyles>
          Feed I am the feed page.
          <h1>value of toggled: {this.props.posts[0].isOpen.toString()}</h1>
          <button onClick={index => this.props.togglePost(0)}> toggle</button>
        </FeedPageStyles>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPage);
