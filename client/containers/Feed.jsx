import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Review from "../containers/Review.jsx"

const FeedStyles = styled.div`
  background-color: lightblue;
  height: 350px;
  width: 100%;
  border: solid;

`;



class Feed extends React.Component {
  render() {
    return (
        <FeedStyles>
          <Review/>
         I am the Feed
        </FeedStyles>

    );
  }
}

export default Feed;