import React, {useState} from "react";
import { connect } from "react-redux";
import styled from "styled-components";


const SearchStyles = styled.div`
  background-color: lightgreen;
  border: solid;
  height: 150px;
  width: 100%;

`;

const Search = ({handleSearch, className}) =>{
const [search, setSearch] = useState('')

const onChange = e =>{
  setSearch(e.target.value)
}


return(

  <SearchStyles>
          <input value={search} onChange = {onChange}></input>
          <input type='button' value='Search' onClick = { () => handleSearch(search)}></input>

        I am the search box
        </SearchStyles>

)
}


export default Search;