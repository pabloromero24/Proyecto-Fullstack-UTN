import React from 'react';
const NovedadItem = (props) => {
    const { description, imagen, price} = props;

    return (   
        
            <div className="card-group col-12 col-md-6 col-lg-2 ">
                <div className="card-productos">
                    <img src={imagen} className="card-img-top p-3" alt="imagen producto" />
                    <div className="card-body">
                        <p className="card-text">
                            <span className="price">{price}</span> <small> 6% OFF</small>
                        </p>
                        <p className="card-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-lightning-fill" viewBox="0 0 16 16">
                                <path
                                    d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                            </svg> FULL
                        </p>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        
    );
}

export default NovedadItem;