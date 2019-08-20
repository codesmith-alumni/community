import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";


const SearchStyles = styled.div`
  background-color: lightgreen;
  border: solid;
  height: 150px;
  width: 100%;

`;

class Search extends React.Component {
  render() {
    return (
        <SearchStyles>
         I am the search box
        </SearchStyles>

    );
  }
}



export default Search;