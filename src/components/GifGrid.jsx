

import { getGif } from "../helpers/getGif";


export const GifGrid = ( { category }) => {

    getGif(category);

    return (
        <>
            <h3>{ category}</h3>  
        </>
  )
}
