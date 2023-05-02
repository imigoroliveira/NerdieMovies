import "./searchinput.css";
import React, { useState, useEffect } from 'react';

export default function SearchInput({ allMovies, updateMovies }) {
  const [query, setQuery] = useState("");

  const pesquisarFilme = (event) => {
    const query = event.target.value.toLowerCase();
    setQuery(query);
    const filtMovies = allMovies.filter((movie) => {
      return (
        (movie.titulo && movie.titulo.toLowerCase().includes(query)) ||
        (movie.ano && movie.ano.toString().includes(query)) ||
        (movie.descricao && movie.descricao.toLowerCase().includes(query))
      );
    });
    updateMovies(filtMovies);
  };

  useEffect(() => {
    if (!query) {
      updateMovies(allMovies);
    }
  }, [query]);

  //Template do componente
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <input 
            type="text" 
            className="form-control mb-4" 
            placeholder="Pesquisar filmes"
            onChange={pesquisarFilme}
          />
        </div>
      </div>
    </div>
  )
}