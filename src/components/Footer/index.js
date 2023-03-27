import "./footer.css";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();

    return (


        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
                <span className="text-white">© Desenvolvido para materia de Desenvolvimento Web Avançado</span>
                <div class="path">Você está em: {location.pathname}</div> 
            </div>
          </div>
        </div>
      </footer>
    )
}