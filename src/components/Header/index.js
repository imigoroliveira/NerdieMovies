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
    )
}