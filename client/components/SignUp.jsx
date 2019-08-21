import React, { useState } from 'react';
import styled from "styled-components";

const SignUpStyle = styled.div`
  max-width: 600px;
  background-color: lightblue;
  input {
    width: 300px;
    padding: 3px;
    margin: 3px;
  }
`;

const SignUp = ({ className }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    // TODO: Fetch here
    console.log(name, email, password);
  }

  return (
    <SignUpStyle>
      <h1>Welcome to Stream!</h1>
      <label>Name</label><input value={name} onChange={handleNameChange} />
      <br />
      <label>Email</label><input value={email} onChange={handleEmailChange} />
      <br />
      <label>Password</label><input value={password} onChange={handlePasswordChange} />
      <br />
      <input type="button" value="Sign up" onClick={handleSubmit} />
    </SignUpStyle>
  );
};

export default SignUp;
