import React from 'react'
import "./styles.css";

const SearchBar = ({onChange, value, onClick}) => {
  return (
    <div className="searchBar-container">
      <input type="text" placeholder="Digite um usuário para consultar seus repositórios" value={value} onChange={onChange} />
      <button className="button" onClick={onClick}>Buscar</button>      
    </div >
  )
}
export default SearchBar