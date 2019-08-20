import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ReviewStyles = styled.div`
  background-color: white;
  height: 150px;
  width: 100%;
  border: solid;

`;


class Review extends React.Component {
  constructor(props){
    super(props)

  }



  render() {

    return (
        <ReviewStyles>
         Company: {this.props.company}
         Username: {this.props.username}
         Details: {this.props.details}
        </ReviewStyles>

    );
  }
}

export default Review;