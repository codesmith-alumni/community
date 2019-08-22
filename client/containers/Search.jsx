import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";


const SearchStyles = styled.div`
  width: 100vw;
  max-width: 600px;
  padding: 10px 0px;
  margin: 10px 5px;
  border-radius: 5px;
  input {
    border: 1px solid #a3a3a3;
    width: 100%;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
  }
  button {
    width: 10%;
    padding: 3px;
    outline: none;
    /* border-radius: 5px; */
  }
`;

const Search = ({ handleSearch, className }) => {
  const [search, setSearch] = useState('')

  const onChange = e => {
    setSearch(e.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSearch(search)
  }


  return (
    // TODO: Make search NOT case sensitive
    <SearchStyles>
      <input placeholder="Search company name and press 'enter' (case sensitive)" value={search} onChange={onChange} onKeyDown={handleKeyDown}></input>
      {/* <button onClick={() => handleSearch(search)}>Search</button> */}

    </SearchStyles>

  )
}


export default Search;