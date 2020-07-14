import React from 'react'
import SearchIcon from "../../assets/icons/search-icon.svg";
import "./styles.css";

const SearchBar = ({onChange, value, onClick}) => {
  return (
    <div className="searchBar-container">
      <input type="text" placeholder="Digite um usuário para consultar seus repositórios" value={value} onChange={onChange} />
      <button className="button" onClick={onClick}><img src={SearchIcon} alt="search icon"></img></button>      
    </div >
  )
}
export default SearchBar