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


// class Composer extends React.Component{
// constructor(props){
//   super(props)
//   this.onChange = this.onChange.bind(this)

// this.state = {
// text: '',
// }
// }


// onChange(e){

// console.log('Im onChange')
// console.log(e.target.value)
// const text = e.target.value
// this.setState({text})
// }


// render(){
// console.log(this.state)

// return(

// <>
//   Hello world 
//   onKeyPress
//   <textarea rows="4" cols="50" value={this.state.text} onChange = {this.onChange}/>
//   <input type='button' value= "Submit"   ></input>

// </>



// )


// }


// }

export default Composer;