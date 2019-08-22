import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const SignUpStyle = styled.div`
  max-width: 600px;
  background-color: lightblue;
  input {
    width: 300px;
    padding: 3px;
    margin: 3px;
  }
  a {
    cursor: pointer;
    color: blue;
  }
`;

const SignUp = ({ className, history }) => {
  const [screen, setScreen] = useState('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const displayErrorMessage = (status) => {
    switch (status) {
      case 404:
        setError('No matching user exists.');
        break;
      case 401:
        setError('Validation failed.');
        break;
      case 400:
        setError('User already exists');
        break;
      default:
        setError('Validation failed.');
        break;
    }
  }

  const handleSignup = () => {
    fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.status === 200) history.push('/home');
        else displayErrorMessage(response.status);
      })
      .catch(err => console.error(err));
  }

  const handleLogin = () => {
    fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        if (response.status === 200) history.push('/home');
        else displayErrorMessage(response.status);
      })
  }

  const redirectIfLoggedIn = () => {
    fetch('/isLoggedIn')
      .then(response => response.json())
      .then(data => {
        const { isLoggedIn } = data;
        if (isLoggedIn) history.push('/home');
      })
      .catch(err => console.error(err));
  }

  // useEffect with [] as the second argument behaves like "componentDidMount"
  useEffect(redirectIfLoggedIn, []);

  return (
    <SignUpStyle>
      <h1>Welcome to Stream!</h1>
      {screen === 'signup' &&
        <>
          <label>Name</label> <input value={name} onChange={handleNameChange} />
        </>
      }
      <br />
      <label>Email</label><input value={email} onChange={handleEmailChange} />
      <br />
      <label>Password</label><input value={password} onChange={handlePasswordChange} />
      <br />
      <input type="button" value={screen === 'signup' ? 'Signup' : 'Login'} onClick={screen === 'signup' ? handleSignup : handleLogin} />
      <br />
      <span>{error !== '' && error}</span>
      <br />
      {screen === 'signup' && <a onClick={() => setScreen('login')}>I already have an account</a>}
      {screen === 'login' && <a onClick={() => setScreen('signup')}>Make an account</a>}
    </SignUpStyle>
  );
};

export default SignUp;
