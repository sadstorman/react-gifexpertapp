import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);


    // //Llamo a la funcion que quiero ejecutar
    // //Le paso como segundo argumento un arreglo de dependencias..... Esto significa que quiero se ejecute mi funcion getGifs() cuando el componente es renderizado por primera vez


    return (
        <>
            <h3 className="animate__bounce">{category}</h3>

            {/* Forma corta de evaluar, si lo primero no es true entonces el resto ni lo hago.... me salteo un paso  */}
            {loading && <p className='animate__bounceIn'>Loading...</p>}
            <div className="card-grid">
                {
                    images.map(img =>
                        <GifGridItem
                            key={img.id}
                            //Mando cada una de las propiedades de las imagenes como una independiente
                            {...img}
                        />
                    )
                }
            </div>
            <br></br>
        </>
    )
}
