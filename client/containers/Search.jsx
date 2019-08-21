import React, {useState} from "react";
import { connect } from "react-redux";
import styled from "styled-components";


  const SearchStyles = styled.div`

  border: solid;
  height: 50px;
  width: 100%;

`;

const Search = ({handleSearch, className}) =>{
const [search, setSearch] = useState('')

const onChange = e =>{
  setSearch(e.target.value)
}


return(

  <SearchStyles>
  Search Stream
  (Search is case sensitive)
          <input value={search} onChange = {onChange}></input>
          <input type='button' value='Search' onClick = { () => handleSearch(search)}></input>

        </SearchStyles>

)
}


export default Search;