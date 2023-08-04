

import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGif";


export const GifGrid = ( { category }) => {

    const [counter, setCounter] = useState(10);

    useEffect( () => {
        getGif(category);
    }, []) ;

    

    return (
        <>
            <h3>{ category}</h3>  

            <h5>{ counter }</h5>
            <button onClick={ () => setCounter(counter + 1) }> + 1</button>
        </>
  )
}
