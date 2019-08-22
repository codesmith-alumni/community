import React, { useState } from 'react'
import styled from "styled-components";

const ComposerStyle = styled.div`
  max-width: 600px;
  margin: 10px 0px;
  label {
    font-size: 0.8rem;
    padding: 5px 0px;
  }
  textarea {
    width: 100vw;
    max-width: 600px;
    min-height: 50px;
    padding: 10px;
    border: 1px solid #a3a3a3;
    border-radius: 3px;
    outline: none;
    resize: vertical;
    font-size: 1rem;
  }
  div {
    display: flex; 
    justify-content: space-between;
    input {
      flex-grow: 1;
      margin-right: 5px;
      padding: 10px;
      border: 1px solid #a3a3a3;
      border-radius: 3px;
      outline: none;
      font-size: 1rem;
   } 
    button {
      width: 80px;
      padding: 5px;
      border-radius: 5px;
      background-color: #2c4b8e;
      color: white;
    }
  }
`;



const Composer = ({ handleReview, className }) => {
  const [text, setText] = useState('');
  const [company, setCompany] = useState('')

  const onReviewChange = (e) => {
    setText(e.target.value)
  }

  const onCompanyChange = (e) => {
    setCompany(e.target.value)
  }

  return (
    <ComposerStyle>
      Share a recent interview!
      <textarea id="Review" placeholder='Need ideas? Share your preparation strategy, examples of questions that you were asked, advice for other interviewees' value={text} onChange={onReviewChange} />
      <div>
        <input id="Company" placeholder='What company was it?' value={company} onChange={onCompanyChange}></input>
        <button onClick={() => handleReview(company, text)} >Share</button>
      </div>
    </ComposerStyle>
  )
}



export default Composer;