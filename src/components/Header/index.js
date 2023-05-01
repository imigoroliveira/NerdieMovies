import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return (




        <nav class="navbar navbar-expand-lg navbar-light  text-white">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Nerdie Movies</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to='/planos'>Planos</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to='/sobre/meunome'>Sobre</Link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link className="btn btn-primary " to='/cadastro'>Cadastro</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   
    


        // <div className="container">
        //     <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        //         <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        //             <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        //         </a>

        //         <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        //             <li> <Link className="nav-link" to='/'>Home</Link> </li>
        //             <li> <Link className="nav-link" to='/planos'>Planos</Link> </li>
        //             <li> <Link className="nav-link" to='/sobre/meunome'>Sobre</Link> </li>
        //         </ul>

        //         <div className="col-md-3 text-end">
        //             <button type="button" className="btn btn-outline-primary me-2">Login</button>
        //             <button type="button" className="btn btn-primary">Cadastrar</button>
        //         </div>
        //     </header>
        // </div>
    )
}