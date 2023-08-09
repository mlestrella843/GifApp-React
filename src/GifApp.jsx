
  import { useState } from "react";
  import { AddCategory } from "./components/AddCategory";
  import { GifGrid } from "./components/GifGrid";
 
  export const GifApp = () => {

      const [ categories, setCategories ] = useState(['Iron Man']);
     
      const onAddCategory = ( newCategory ) => {
          //console.log( newCategory );
          if( categories.includes(newCategory) ) return; 
          setCategories( [ newCategory, ...categories ] );      
      }
      return (
        <>
          <div>   
            <h1>Gif App React</h1>
            <br/>
            <AddCategory 
                onNewCategory = { onAddCategory }              
            />
            <br/>
            {
                categories.map( category => (
                    < GifGrid 
                        key={ category } 
                        category={ category }  
                    />                  
                  ))                  
            } 

          </div>         
        </>
      )
}
