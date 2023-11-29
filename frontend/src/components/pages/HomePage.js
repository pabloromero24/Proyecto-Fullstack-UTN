import "../../styles/components/pages/HomePage.css"

const HomePage = () => {

    // const navigateToProductos = (categoria) => {        
    //     window.history.pushState(null, null, `/Productos?categoria=${categoria}`);        
    //     handleCategoriaChange(categoria);        
    // };

    return ( 
        <div>
            <section>
                <div className="video-container">
                <div className="ratio ratio-16x9 mx-auto my-auto">
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"
                    src="./recursos/videos/skate(720p).mp4" title="" allowfullscreen></video>
                    
                </div>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./recursos/imagenes/skateboarding-1.jpg" className="d-block p-3 mx-auto my-auto" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h5 className="fw-semibold">Phoenix-Skateboards</h5>
                        <p className="fw-semibold d-lg-block">Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Placeat sapiente deleniti sint corrupti vero</p>
                        <p><a href="/Nosotros">Nosotros</a></p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="./recursos/imagenes/skateboarding-2.jpg" className="d-block p-3 mx-auto my-auto" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h5 className="fw-semibold">Somos fabricantes</h5>
                        <p className="fw-semibold d-lg-block">Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Placeat sapiente deleniti sint corrupti vero Lorem ipsum, dolor sit amet
                        consectetur</p>
                        <p><a href="/productos">Productos</a></p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="./recursos/imagenes/skateboarding-3.jpg" className="d-block p-3 mx-auto my-auto" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h5 className="fw-semibold">Líderes en el mercado</h5>
                        <p className="fw-semibold d-lg-block">Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Placeat sapiente deleniti sint corrupti vero</p>
                        <p><a href="/Contacto">Contacto</a></p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>    
                <div className="container image-cont text-center">
                <div className="row">
                    <div className="img-container col-8 d-flex justify-content-between align-items-center">
                    <div className="image-overlay"></div>
                    <img src="./recursos/imagenes/skateboarding-4.jpg" className="img-fluid rounded-5" alt="img 1"/>
                    </div>
                    <div className="col-4 text-center text-button">
                    <p>Skateboards</p>
                    <a href="/productos"><button type="button" className="btn btn-secondary">VER MÁS</button></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 text-center text-button">
                    <p>Longboards</p>
                    <a href="/productos"><button type="button" className="btn btn-secondary">VER MÁS</button></a>
                    </div>
                    <div className="img-container col-8 d-flex justify-content-between align-items-center">
                    <div className="image-overlay-2"></div>
                    <img src="./recursos/imagenes/skateboarding-5.jpg" className="img-fluid rounded-5" alt="img 2"/>
                    </div>
                </div>
                <div className="row">
                    <div className="img-container col-8 d-flex justify-content-between align-items-center">
                    <div className="image-overlay"></div>
                    <img src="./recursos/imagenes/skateboarding-6.jpg" className="img-fluid rounded-5" alt="img 3"/>
                    </div>
                    <div className="col-4 text-center text-button">
                    <p>Indumentaria</p>
                    <a href="/productos"><button type="button" className="btn btn-secondary">VER MÁS</button></a>
                    </div>
                </div>
                </div>
            </section>
        </div>
     );
}
 
export default HomePage;
 
