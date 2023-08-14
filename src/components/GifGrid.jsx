
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category }) => {

    const {  images, isLoading } = useFetchGifs( category );

    return (
        <>
            <div className="categoryTitle">
                 <h5>{ category }</h5>  
            </div>

            {
                isLoading && ( <h2>is Loading...</h2>)
                  }
                
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
