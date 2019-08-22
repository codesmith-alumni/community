import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ReviewStyles = styled.div`
  width: 100vw;
  max-width: 600px;
  background-color: white;
  padding: 10px;
  margin: 10px 0px;
  border: 0.5px solid #a3a3a3;
  border-radius: 5px;
  p {
    margin: 5px 0px;
  }
  .headline {
    padding: 0px 5px;
  }
  .review {
    background-color: #EFF1F2;
    border-radius: 3px;
    padding: 5px;
  }
`;


class Review extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {

    return (
      <ReviewStyles>
        <p><strong class='headline'>{this.props.username}</strong>interviewed at <strong>{this.props.company}</strong></p>
        <p className='review'>{this.props.details}</p>
      </ReviewStyles>

    );
  }
}

export default Review;