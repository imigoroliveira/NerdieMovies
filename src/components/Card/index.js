import "./card.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}


export default function Card() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [sortType, setSortType] = useState("titleYearRating");

  //** useEffect utilizado para carregar da api os filmes e depois formata o retorno pra json 
  //* e apos isso guarda os dados dos filmes no state das variaveis todos os filmes e filmes, depois o sort ordena os filmes em ordem alfabetica 
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(data => {
        setAllMovies(data);
        const sortedMovies = [...data].sort((a, b) => a.titulo.localeCompare(b.titulo));
        setMovies(sortedMovies);
      });
  }, []);


  //Funcao pra pesquisar os filmes e mudar dinamicamente a organizacao dos cards rederizados
  const pesquisarFilme = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredMovies = allMovies.filter((movie) => {
      return (
        (movie.titulo && movie.titulo.toLowerCase().includes(query)) ||
        (movie.ano && movie.ano.toString().includes(query)) ||
        (movie.descricao && movie.descricao.toLowerCase().includes(query))
      );
    });
    setMovies(filteredMovies);
  }

  //Funcao chamada que recebe o evento de ordenacao do select de ordenacao e chama a funcao pra de fato ordenar
  const ordenarFilme = (event) => {
    const sortType = event.target.value;
    setSortType(sortType);
    ordenar(sortType);
  };
  
  //Funcao pra ordenar por titulo, ano e note todos em ordem alfabetica/crescente
  const ordenar = (type) => {
    const filmeFiltrado = [...movies].sort((a, b) => {
      if (type === "title") {
        return a.titulo.localeCompare(b.titulo);
      } else if (type === "rating") {
        return a.nota - b.nota;
      } else if (type === "year") {
        return a.ano - b.ano;
      } else {
        const compareTitle = a.titulo.localeCompare(b.titulo);
        if (compareTitle !== 0) {
          return compareTitle;
        }
        const compareYear = b.ano - a.ano;
        if (compareYear !== 0) {
          return compareYear;
        }
        return b.nota - a.nota;
      }
    });
    setMovies(filmeFiltrado);
  };

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
      <div className="row">
        <div className="col-3 mb-4">
          <select className="form-select" value={sortType} onChange={ordenarFilme}>
            <option value="title">Título</option>
            <option value="year">Ano</option>
            <option value="rating">Nota</option>
          </select>
        </div>
      </div>
      <div className="row movie-row" style={{flexWrap: "wrap"}}>
        {movies.map(movie => (
          <div className="col-4 mb-4" key={movie.id}>
            <div className="card">
              <img src={movie.poster} height="550px" alt={movie.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{movie.titulo} ({movie.ano}) </h5>
                <p className="card-text">{movie.descricao ? movie.descricao.substring(0, 120) + "..." : ""}</p>
                <Link to={`/detalhes/${movie.id}`}>
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </Link>
                <Assitido javisto={movie.assistido}></Assitido>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}