import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import Button from './../components/Button'


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
                            <h5 className="card-title">{movie.titulo}</h5>
                            <p className="card-text">Ano de Lancamento: {movie.ano}</p>
                            <p className="card-text">Nota: {movie.nota}</p>
                            <p className="card-text">Sinopse:  {movie.sinopse}</p>
                            <a href={`https://www.google.com/search?q=assistir ${movie.titulo} dublado`} target="_BLANK">
                            <Button label="Assistir"  variant="primary" />
                            </a>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    </div>
    <Comments/>

</div> 
    );
}

export default Detalhes;
