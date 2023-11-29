import "../../styles/components/pages/NosotrosPage.css";

const NosotrosPage = () => {
    return ( 
        <div className="body-nosotros">    
        
            <img src="./recursos/imagenes/nosotros-central.jpg" className="img-central img-fluid mx-auto d-block w-75"
                alt="imagen central"/>
        
        
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6 order-0 order-md-0 order-lg-1">
                        <div className="nosotros-text">
                            <h1>Phoenix-Skateboards</h1>
                            <h2>Somos una empresa de amigos unidos por el skateboarding</h2>
                            <br/>
                            <br/>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat a provident
                                impedit
                                qui id
                                quidem corrupti ex, reprehenderit libero eum. Quidem quod exercitationem maiores nostrum
                                laboriosam
                                eveniet laborum tenetur.
                                Sapiente dolorem fugiat eligendi neque placeat laudantium adipisci cupiditate tempore
                                repellendus ab
                                recusandae animi repudiandae laborum pariatur nisi aliquid, soluta aperiam harum ullam
                                dicta?
                                Beatae, pariatur. Veniam possimus soluta minima?
                                Dicta doloremque suscipit veritatis aut, voluptates vitae asperiores enim, assumenda
                                officia
                                pariatur minus? Doloribus, excepturi fugit? Inventore cupiditate in, reiciendis tempore
                                natus
                                voluptatem provident eos sint minima nihil blanditiis facilis?
                                Commodi magnam non, exercitationem perferendis impedit natus iusto, saepe in doloribus
                                dignissimos
                            </p>
                            <br/>
                            <img src="./recursos/imagenes/nosotros-img-foot.avif"
                                className="img-nosotros-text img-fluid" alt="img-foot"/>
                        </div>
                    </div>
                    <div className="nosotros-card col-12 col-md-6 col-lg-3 order-1 order-md-1 order-lg-0">
                        <div className="card mt-5 mx-auto">
                            <img src="./recursos/imagenes/nosotros-1.avif" className="card-img-top" alt="card nosotros"/>
                            <div className="card-body">
                                <h2>Dirección</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                        <div className="card mt-5 mx-auto">
                            <img src="./recursos/imagenes/nosotros-2.avif" className="card-img-top" alt="card nosotros"/>
                            <div className="card-body">
                                <h2>RR.HH.</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                        <div className="card mt-5 mx-auto">
                            <img src="./recursos/imagenes/nosotros-3.avif" className="card-img-top" alt="card nosotros"/>
                            <div className="card-body">
                                <h2>Publicidad</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="nosotros-card col-12 col-md-6 col-lg-3 order-2 order-md-2 order-lg-2">
                        <div className="card mt-5 mx-auto">
                            <img src="./recursos/imagenes/nosotros-4.avif" className="card-img-top" alt="card nosotros"/>
                            <div className="card-body">
                                <h2>Producción</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                        <div className="card mt-5 mx-auto">
                            <img src="./recursos/imagenes/nosotros-5.avif" className="card-img-top" alt="card nosotros"/>
                            <div className="card-body">
                                <h2>Marketing</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                        <div className="card mt-5 mx-auto">
                            <img src="./recursos/imagenes/nosotros-6.avif" className="card-img-top" alt="card nosotros"/>
                            <div className="card-body">
                                <h2>Diseño</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
           
     );
}
 
export default NosotrosPage;