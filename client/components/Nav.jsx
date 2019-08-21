import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyles = styled.div`
  margin: 0;
  width: 100%;
  height: 40px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: orange;
`;

const NavTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const NavMenuEntry = styled.li`
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: bold;
  color: orange;
  border-right: 1px solid #ccc;
`;

const Nav = ({ classNames }) => (
  <>
    <NavStyles id="Nav">
      <NavTitle>STREAM</NavTitle>
      <NavMenuEntry>
        <button type="button">
          <Link to="/SignOut">SignOut</Link>
        </button>
      </NavMenuEntry>
    </NavStyles>
  </>
);

export default Nav;
