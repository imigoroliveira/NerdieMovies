importar  Reagir  de  'reagir' ;
importar  ReactDOM  de  'react-dom/client' ;
import  'bootstrap/dist/css/bootstrap.css' ;
importar  './index.css' ;

// Componentes
importar  App  de  './App' ;


 raiz  const =  ReactDOM . createRoot ( document . getElementById ( 'raiz' ) ) ;
raiz . renderizar (
  < Reagir . Modo estrito > 
    < Aplicativo  / >
  < / Reagir . Modo estrito >
) ;

// Se você deseja começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint analítico. Saiba mais: https://bit.ly/CRA-vitals
