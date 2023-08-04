

import { useEffect } from "react";
import { getGif } from "../helpers/getGif";


export const GifGrid = ( { category }) => {

    useEffect( () => {
        getGif(category);
    }, [])

    return (
        <>
            <h3>{ category}</h3>  
        </>
  )

}
