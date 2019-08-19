import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const FeedStyles = styled.div`
  background-color: lightblue;
  height: 150px;
  width: 100%;
  border: solid

`;



class Feed extends React.Component {
  render() {
    return (
        <FeedStyles>
         I am the search box
        </FeedStyles>

    );
  }
}

export default Feed;