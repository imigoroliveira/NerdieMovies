import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

const filmes = [{
    "nome": "Batman v Superman: Dawn of Justice",
    "duracao": "2h 33min",
    "foto": "https://upload.wikimedia.org/wikipedia/pt/1/13/Batman_v_Superman_-_Poster_cinema.jpg",
    "ano": 2016,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Em Batman Vs Superman - A Origem Da Justiça, o confronto entre Superman (Henry Cavill) e Zod (Michael Shannon) em Metrópolis fez com que a população mundial se dividisse acerca da existência de extra-terrestres na Terra. Enquanto muitos consideram o Superman como um novo deus, há aqueles que consideram extremamente perigoso que haja um ser tão poderoso sem qualquer tipo de controle. Bruce Wayne (Ben Affleck) é um dos que acreditam nesta segunda hipótese. Sob o manto de um Batman violento e obcecado, ele investiga o laboratório de Lex Luthor (Jesse Eisenberg), que descobriu uma pedra verde que consegue eliminar e enfraquecer os filhos de Krypton.",
    "nota": 5
},
{
    "id": 2,
    "nome": "The Batman",
    "duracao": "2H30",
    "foto": "https://upload.wikimedia.org/wikipedia/pt/3/38/The_Batman_poster.jpg",
    "ano": 2022,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.",
    "nota": 5
},
{
    "id": 3,
    "nome": "Homem-Aranha: Sem Volta Para Casa",
    "duracao": "2H28",
    "foto": "https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG",
    "ano": 2021,
    "assistido": false,
    "genero": "Ação/Nerd",
    "descricao": "Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    return (
        <div>
            <Title
                title={"Detalhes do filme"}
                text="" />               
            {(() => {
                if (filme == 'Batman v Superman: Dawn of Justice') {
                    return (
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div class="row">
                                            <div class="col cols-sm-12">
                                                <div>
                                                    <img src={filmes[0].foto} style={{ width: "50%" }} alt={filmes[0].nome} className="card-img-top" />
                                                </div>
                                                
                                            </div>
                                            <div class="col">
                                                <div className="card-body">
                                                    <h5 className="card-title">{filmes[0].nome} ({filmes[0].ano}) </h5>
                                                    <p className="card-text">Sinopse: {filmes[0].descricao}</p>
                                                    <p className="card-text">Ano de Lancamento: {filmes[0].ano}</p>
                                                    <p className="card-text">Nota: {filmes[0].nota}</p>
                                                    <p className="card-text">Duracao: {filmes[0].duracao}</p>
                                                    <p className="card-text">Genero: {filmes[0].genero}</p>
                                                    <a href="https://www.youtube.com/watch?v=IHDgrNxO-5I&ab_channel=WarnerBros.PicturesBrasil" target="_BLANK">
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
                        </div> )
                } else if (filme == 'The Batman') {
                    return (
                        <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div class="row">
                                        <div class="col cols-sm-12">
                                            <div>
                                                <img src={filmes[1].foto} style={{ width: "50%" }} alt={filmes[1].nome} className="card-img-top" />
                                            </div>
                                            
                                        </div>
                                        <div class="col">
                                            <div className="card-body">
                                                <h5 className="card-title">{filmes[1].nome} ({filmes[1].ano}) </h5>
                                                <p className="card-text">Sinopse: {filmes[1].descricao}</p>
                                                <p className="card-text">Ano de Lancamento: {filmes[1].ano}</p>
                                                <p className="card-text">Nota: {filmes[1].nota}</p>
                                                <p className="card-text">Duracao: {filmes[1].duracao}</p>
                                                <p className="card-text">Genero: {filmes[1].genero}</p>
                                                <a href="https://www.youtube.com/watch?v=rsQEor4y2hg&t=15s&ab_channel=WarnerBros.PicturesBrasil" target="_BLANK">
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
                    )
                } else {
                    return (
                        <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div class="row">
                                        <div class="col cols-sm-12">
                                            <div>
                                                <img src={filmes[2].foto} style={{ width: "50%" }} alt={filmes[2].nome} className="card-img-top" />
                                            </div>
                                            
                                        </div>
                                        <div class="col">
                                            <div className="card-body">
                                                <h5 className="card-title">{filmes[2].nome} ({filmes[2].ano}) </h5>
                                                <p className="card-text">Sinopse: {filmes[2].descricao}</p>
                                                <p className="card-text">Ano de Lancamento: {filmes[2].ano}</p>
                                                <p className="card-text">Nota: {filmes[2].nota}</p>
                                                <p className="card-text">Duracao: {filmes[2].duracao}</p>
                                                <p className="card-text">Genero: {filmes[2].genero}</p>
                                                <a href="https://www.youtube.com/watch?v=FDNNHh7TRN0&ab_channel=Ingresso.com" target="_BLANK">
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
                    )
                }
            })()}
        </div>
    )
}

export default Detalhes;