import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

function Sobre() {
    const { name } = useParams();
    
    return (
        <div>  
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} />          
            <div className="sobre-empresa">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="https://yt3.googleusercontent.com/ytc/AL5GRJWBVqjUsgukx1eBu_sc9vB6MXDJonjVFfQVUBIlIQ=s900-c-k-c0x00ffffff-no-rj" style={{ width: "30%" }}  alt="Sobre nossa empresa" />
          </div>
          <div className="col-lg-6">
            <p>
                Somos uma empresa de stream de filmes com um catalog empolgante!                Somos uma empresa de stream de filmes com um catalog empolgante!
                Somos uma empresa de stream de filmes com um catalog empolgante!
                Somos uma empresa de stream de filmes com um catalog empolgante!
                Somos uma empresa de stream de filmes com um catalog empolgante!
        
            </p>
          </div>
        </div>
      </div>
    </div>    
        </div>
    )
}

export default Sobre;