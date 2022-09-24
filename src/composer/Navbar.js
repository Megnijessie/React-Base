

function Navbar() {
    
    return(
        <div>
            <nav className="navbar navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                    <a href="" className="btn border-light btn-outline-success text-light mx-5" > Accueil</a>
                    <a href="" className="btn border-light btn-outline-success text-light">Creer un article</a>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;