import React from 'react';
import { Link } from 'react-router-dom';
import Title from './../components/Title/index';
 
function Error(){
    return (
        <div className="container my-5">
        <div className="row">
          <div className="col">\
            <h1 className="text-center mb-4">404 - Página não encontrada</h1>
            <p className="text-center mb-4">Desculpe, a página que você está procurando não existe.</p>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="/" className="btn btn-primary">Voltar para a página inicial</Link>
            </div>
          </div>
        </div>
      </div>
    )   
}
 
export default Error;