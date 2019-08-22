import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyles = styled.div`
  width: 100%;
  /* height: 40px; */
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 3px solid #2c4b8e;
`;

const NavTitle = styled.div`
  font-size: 30px;
`;

const NavMenuEntry = styled.li`
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  color: orange;
  border-right: 1px solid #ccc;
`;

const Nav = ({ classNames, location }) => {
  return (
    <>
      <NavStyles id="Nav">
        <NavTitle>Boost</NavTitle>
        <NavMenuEntry>
          {location.pathname !== '/' &&
            <button type="button">
              <Link to="/SignOut">Sign out</Link>
            </button>
          }
        </NavMenuEntry>
      </NavStyles>
    </>
  )
};

export default Nav;
