import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyles = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #2c4b8e;
  background-color: white;
  button {
    padding: 8px 15px;
    font-size: 0.8rem;
    border: none;
    color: blue;
    font-size: 1rem;
  }
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const NavTitle = styled.div`
  font-size: 30px;
  flex-grow:1;
`;

const NavMenuEntry = styled.li`
  /* display: block; */
  /* padding: 8px 15px; */
  /* text-decoration: none; */
  /* color: orange; */
  /* border-right: 1px solid #ccc; */
`;

const Nav = ({ classNames, location, history }) => {
  const handleSignout = () => {
    fetch('/auth/logout')
      .then((response) => {
        history.push('/')
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <NavStyles id="Nav">
        <img src='https://cdn.evbuc.com/images/52757388/160348707483/1/logo.png' alt='Codesmith Logo' />
        <NavTitle>
          Boost
          </NavTitle>
        <NavMenuEntry>
          {location.pathname !== '/' &&
            <button type="button" onClick={handleSignout}>
              Sign out
              {/* <Link to="/SignOut">Sign out</Link> */}
            </button>
          }
        </NavMenuEntry>
      </NavStyles>
    </>
  )
};

export default Nav;
