import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from './NovedadItem';
import "../../styles/components/pages/ProductosPage.css";



const ProductosPage = ({categoria, handleCategoriaChange }) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovededes] = useState([]);
   

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            let url = `${process.env.REACT_APP_API_URL}/api/novedades`;
            
            if (categoria){
                url += `?categoria=${categoria}`;
            }

            const response = await axios.get(url);
            setNovededes(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, [categoria]);   
    
    return ( 
        
        <div className="body-productos">
        <div className="container">

                 <div className='col-6 d-block d-sm-flex mx-auto btn-productos'>
                    <button type="button"  className='btn btn-secondary' onClick={() => handleCategoriaChange('skate')}>Skateboards</button>
                    <button type="button" className='btn btn-secondary' onClick={() => handleCategoriaChange('longboard')}>Longboards</button>
                    <button type="button" className='btn btn-secondary' onClick={() => handleCategoriaChange('remera')}>Remeras</button>                    
                </div>

            <div className="productos row">
                {loading ? (
                    <h1 className='d-flex justify-content-center'>Cargando Productos...</h1>
                ) : (
                    novedades.map(item => 
                        <NovedadItem
                            key={item.id} 
                            nombre={item.Nombre}                           
                            description={item.Descripcion}
                            imagen={item.imagen}
                            price={item.Precio} />)
                )}
            </div>
        </div>
    </div> 
     );
};
 
export default ProductosPage;