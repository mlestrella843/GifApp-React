
  import { useState } from "react";
  import { AddCategory, GifGrid } from "./components";
 
  export const GifApp = () => {

      const [ categories, setCategories ] = useState(['Iron Man']);
     
      const onAddCategory = ( newCategory ) => {
          if( categories.includes(newCategory) ) return; 
          setCategories( [ newCategory, ...categories ] );      
      }
      return (
        <>
          <div>   
            <h3>Gif App React</h3>
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
