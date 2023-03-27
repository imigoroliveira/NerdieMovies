import React from 'react';
import Title from './../components/Title/index';

const planos = [{
    "nome": "Plano A",
    "Preco": "19,90",
    "detalhes": "Plano com 1 tela e HD",
    "foto":"https://imagensemoldes.com.br/wp-content/uploads/2021/02/Letra-A-PNG-1-1024x1024.png"
  },
  {
    "nome": "Plano B",
    "Preco": "23,90",
    "detalhes": "Plano com 3 telas simultaneas e 2K",
    "foto":"https://cdn-icons-png.flaticon.com/512/37/37502.png"
  },
  {
    "nome": "Plano C",
    "Preco": "32,90",
    "detalhes": "Plano com 6 telas simultaneas e 4K",
    "foto":"https://e7.pngegg.com/pngimages/340/404/png-clipart-brand-black-and-white-circle-letter-c-text-black-thumbnail.png"
  },
]

const handleClick = (nome) => {
    alert(`O Plano ${nome} foi adquirido!`);
  };

function Planos(){
    return (
        <div className="container text-center">
        <div className="row">
          {planos.map((plano, i) => (
            <div className="col" key={i}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={plano.foto}
                  alt={plano.nome}
                />
                <div className="card-body">
                  <h5 className="card-title">{plano.nome}</h5>
                  <p className="card-text">R$ {plano.Preco}</p>
                  <p className="card-text">{plano.detalhes}</p>

                  <a href={plano.link} className="btn btn-primary" onClick={() => handleClick(plano.nome)}>
                   Adquirir plano
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )   
}
 
export default Planos;