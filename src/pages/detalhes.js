import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';


function Detalhes() {
    const { id } = useParams();

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        if (id !== undefined) {
            fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
            .then(response => response.json())
            .then(data => {
              setMovies(data);
              console.log(id);
            });
        }
      }, [id]);

    return (
        <div>
              <a>{movies.titulo}</a>
        </div>
    )
}

export default Detalhes;