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
  const [sortType, setSortType] = useState("");


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(data => {
        setAllMovies(data);
        setMovies(data);
      });
  }, []);

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

  const ordenarFilme = (event) => {
    const sortType = event.target.value;
    setSortType(sortType);
    ordenar(sortType);
  }

  const ordenar = (type) => {
    const filmeFiltrado = [...movies].sort((a, b) => {
      if (type === "name") {
        return a.titulo.localeCompare(b.titulo);
      } else if (type === "watched") {
        return a.assistido === b.assistido ? 0 : a.assistido ? -1 : 1;
      }
      return 0;
    });
    setMovies(filmeFiltrado);
  }

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
            <option value="">Ordenar por</option>
            <option value="name">Nome</option>
            <option value="watched">Assistido</option>
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