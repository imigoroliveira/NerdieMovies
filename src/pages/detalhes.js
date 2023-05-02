import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import Button from './../components/Button'

function Detalhes() {
  const  pathId  = useParams();
  const [movie, setMovie] = useState({});
  const [erro, setErro] = useState(null);

  const id = pathId.filme;

  useEffect(() => {
    if (id !== undefined) {
      fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
        .then(response => response.json())
        .then(data => {
          if (Object.keys(data).length === 0) { // verifica se o objeto retornado é vazio
            setErro("O filme não foi encontrado");
          } else {
            setMovie(data);
            console.log(movie); 
          }
        })
        .catch(error => {
          console.log(error);
          setErro("Ocorreu um erro ao carregar o filme");
        });
    }
  }, [id]);
  return (

    <div>
      {erro && (
        <div className='cardErro'
          style={{
            backgroundColor: "#f44336",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)"
          }}
        >
          <strong>Erro:</strong> {erro}
        </div>
      )} 
      {Object.keys(movie).length > 0 && (
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
                              <p className="card-text">Nota: nao existe nota no endpoint de listagem por id   {movie.nota}</p>
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
    )}
  </div>
);
}

export default Detalhes;
