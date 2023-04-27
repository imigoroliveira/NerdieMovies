import "./card.css";
import React, { useState, useEffect } from 'react';

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}


export default function Card() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(data => {
        const moviesWithIds = data.map((movie, index) => ({ ...movie, id: index }));
        setMovies(moviesWithIds);
      });
  }, []);


  return (
    <div className="container text-center">
    <div className="row movie-row" style={{flexWrap: "wrap"}}>
      {movies.map(movie => (
        <div className="col-4 mb-4" key={movie.id}>
          <div className="card">
            <img src={movie.poster} height="550px" alt={movie.nome} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{movie.titulo} ({movie.ano}) </h5>
              <p className="card-text">{movie.descricao ? movie.descricao.substring(0, 120) + "..." : ""}</p>
              <a href={`/detalhes/${movie.id}`}>
                <div className="btn btn-primary">
                  Detalhes
                </div>
              </a>
              <Assitido javisto={movie.assistido}></Assitido>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}