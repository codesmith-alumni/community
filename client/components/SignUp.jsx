import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const SignUpStyle = styled.div`
  display: flex;
  justify-content: center;
  div {
    max-width: 600px;
    margin: 50px;
    padding: 50px;
    display: flex;
    /* border: 1px solid #a3a3a3; */
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
    h1 {
      padding: 20px;
    }
    span {
      display: block;
      padding: 2px;
      label {
        display: inline-block;
        width: 100px;
        text-align: right;
        padding: 3px 10px;
      }
      input {
        width: 200px;
        padding: 3px;
        font-size: 1rem;
      }
    }
    button {
      margin: 20px 5px;
      padding: 5px 20px;
      border-radius: 10px;
      outline: none;
      background-color: #2c4b8e;
      color: white;
      font-size: 1rem;
    }
    .error {
      padding: 5px;
      color: red;
    }
    a {
        cursor: pointer;
        color: skyblue;
    }
  }
`;

const SignUp = ({ className, history }) => {
  const [screen, setScreen] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const displayErrorMessage = status => {
    switch (status) {
      case 404:
        setError("No matching user exists.");
        break;
      case 401:
        setError("Validation failed.");
        break;
      case 400:
        setError("User already exists");
        break;
      default:
        setError("Validation failed.");
        break;
    }
  };

  const handleSignup = () => {
    fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (response.status === 200) history.push("/home");
        else displayErrorMessage(response.status);
      })
      .catch(err => console.error(err));
  };

  const handleLogin = () => {
    fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      if (response.status === 200) history.push("/home");
      else displayErrorMessage(response.status);
    });
  };

  const redirectIfLoggedIn = () => {
    console.log('checking if logged in');
    fetch("/isLoggedIn")
      .then(response => response.json())
      .then(data => {
        const { isLoggedIn } = data;
        console.log('isLoggedIn', isLoggedIn);
        if (isLoggedIn) history.push("/home");
      })
      .catch(err => console.error(err));
  };

  // useEffect with [] as the second argument behaves like "componentDidMount"
  useEffect(redirectIfLoggedIn, []);

  return (
    <SignUpStyle>
      <div>
        <h1>Welcome to CS Boost!</h1>
        {screen === 'signup' &&
          <span>
            <label>Name</label>
            <input value={name} onChange={handleNameChange} />
          </span>
        }
        <span>
          <label>Email</label>
          <input value={email} onChange={handleEmailChange} />
        </span>
        <span>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </span>
        <button onClick={screen === 'signup' ? handleSignup : handleLogin} >{screen === 'signup' ? 'Signup' : 'Login'}</button>
        {screen === 'signup' && <a onClick={() => setScreen('login')}>I'm already a member</a>}
        {screen === 'login' && <a onClick={() => setScreen('signup')}>Not a member? Join today</a>}
        <span className="error">{error !== '' && error}</span>
      </div>
    </SignUpStyle >
  );
};

export default SignUp;
