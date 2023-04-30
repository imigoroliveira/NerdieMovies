import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

function Detalhes() {
  const  pathId  = useParams();
  const [movie, setMovie] = useState({});
  const id = pathId.filme;

  useEffect(() => {
    if (id !== undefined) {
      fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
        .then(response => response.json())
        .then(data => {
          setMovie(data);
          console.log(movie); 
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <div className="container text-center">
    <div className="row">
        <div className="col">
            <div className="card">
                <div class="row">
                    <div class="col cols-sm-12">
                        <div>
                            <img src={movie.poster} style={{ width: "50%" }} alt={movie.nome} className="card-img-top" />
                        </div>

                    </div>
                    <div class="col">
                        <div className="card-body">
                            <h5 className="card-title">{movie.titulo} ({movie.ano}) </h5>
                            <p className="card-text">Ano de Lancamento: {movie.ano}</p>
                            <p className="card-text">Nota: {movie.nota}</p>
                            <p className="card-text">Genero: {movie.genero}</p>
                            <Assitido javisto={movie.assistido}></Assitido>
                            <a href={`https://www.youtube.com/results?search_query=${movie.titulo}`} target="_BLANK">
                                <div className="btn btn-primary">
                                    Ver Trailer
                                </div>
                            </a>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    </div>
</div> 
    );
}

export default Detalhes;
