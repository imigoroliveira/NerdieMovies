import "./card.css";
import Comments from './../Comments/index';

const filmes = [{
  "id": 1,
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

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card() {
  return (
    <div className="container text-center">
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={filme.foto} height="600px" alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p className="card-text">{filme.descricao.substring(0, 120)+"..."}</p>
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}