import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ReviewStyles = styled.div`
  background-color: lavender;
  height: 150px;
  width: 100%;
  border: solid;

`;


class Review extends React.Component {
  render() {
    return (
        <ReviewStyles>
         I am the Reviews
        </ReviewStyles>

    );
  }
}

export default Review;