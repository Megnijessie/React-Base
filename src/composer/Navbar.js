import { Link } from "react-router-dom";

function Navbar() {
    

    return(
        <div>
            <nav className="navbar navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                    <Link to={'/'} className="btn border-light btn-outline-success text-light mx-5" > Accueil</Link>
                    <Link to={'/form'} className="btn border-light btn-outline-success text-light">Creer un article</Link>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;