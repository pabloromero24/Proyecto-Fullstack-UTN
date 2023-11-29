import "../../styles/components/layout/Header.css"

const Header = (props) => {
  return (

        <nav className="navbar navbar-expand-lg fixed-top">            
            <div class="container">
                    <img className="logo col-lg-2" src="/recursos/imagenes/Logo.png" alt="logo"/>
                    <p className="marca-responsive d-lg-none me-md-5">Phoenix-Skateboards</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="col-lg-8 container-fluid">                        
                        <h1 className="marca-central d-lg-block d-md-none d-sm-none text-center">Phoenix-Skateboards</h1>
                    <div className="collapse navbar-collapse ul-nav justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-1 mb-4 gap-lg-5 gap-md-2">
                            <li className="nav-item">
                               <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link active" aria-current="page" href="/Nosotros">Nosotros</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link active" aria-current="page" href="/Productos">Productos</a>
                            </li>                           
                            <li className="nav-item">
                               <a className="nav-link" href="/Contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 skate-box d-none d-sm-none d-md-none d-lg-flex">
                        <img className="logo-skate" src="/recursos/imagenes/man-8109655.svg" alt="logo"/>
                </div>
            </div>     
        </nav>
    
        
    );
}
 
export default Header;



