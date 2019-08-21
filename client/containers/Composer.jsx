import React, { useState } from 'react'
import styled from "styled-components";

const ComposerStyle = styled.div`
border: solid;

`;



const Composer = ({handleReview, className}) => {
  const [text, setText] = useState('');
  const [company, setCompany] = useState('')

  const onReviewChange = (e) => {
    setText(e.target.value)
  }

  const onCompanyChange = (e) => {
    setCompany(e.target.value)
  }

  const onClick = (e) => {
    setCompany(e.target.value)
    console.log(company)
  }

  return (
    <ComposerStyle>
      <label htmlFor= "Company"> Company </label>
      <br/>
      <input id = "Company" value = {company} onChange = {onCompanyChange}></input>
      <br/>
      <label htmlFor= "Review"> Review </label>
      <br/>
      <textarea id = "Review" rows="4" cols="50" placeholder = 'Review goes here' value={text} onChange = {onReviewChange} />
      <br/>
      <input type='button' value= "Submit" onClick = { () => handleReview(company,text)} ></input> 
    </ComposerStyle>
  )
}



export default Composer;