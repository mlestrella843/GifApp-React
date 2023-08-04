
  import { useState } from "react";
  import { AddCategory } from "./components/AddCategory";
  import { GifGrid } from "./components/GifGrid";
  

  export const GifApp = () => {

      const [ categories, setCategories ] = useState(['One Punch']);
     
      const onAddCategory = ( newCategory ) => {
          //console.log( newCategory );
          if( categories.includes(newCategory) ) return; 
          setCategories( [ newCategory, ...categories ] );      
      }
      return (
        <>
          <div className="container mt-1">   
            <h1 className="mt-5">Gif App React</h1>
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
