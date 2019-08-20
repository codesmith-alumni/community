import React, { useState } from 'react'
import styled from "styled-components";

const ComposerStyle = styled.div`
background-color: red;

`;



const Composer = ({className}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <ComposerStyle>
      <textarea rows="4" cols="50" placeholder = 'Review goes here' value={text} onChange = {onChange}/>
      <input type='button' value= "Submit"   ></input> 
    </ComposerStyle>
  )
}



export default Composer;