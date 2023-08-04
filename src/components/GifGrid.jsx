

import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";
import { GifItem } from "./GifItem";



export const GifGrid = ( { category }) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGif( category );
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, [])

    return (
        <>
            <h3>{ category}</h3>  

            <div className="card-grid" >          
                {
                    images.map( ( image ) => (
                         <GifItem 
                         
                              key={ image.id } 
                              { ...image    } 
                          
                       />
                    ))
                }
                
            </div>
        </>
  )
}
