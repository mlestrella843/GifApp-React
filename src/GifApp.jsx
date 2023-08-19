
  import { useState } from "react";
  import { AddCategory, GifGrid } from "./components";
 
  export const GifApp = () => {

      const [ categories, setCategories ] = useState([' Powerpuffs Girls']);
     
      const onAddCategory = ( newCategory ) => {
          if( categories.includes(newCategory) ) return; 
          setCategories( [ newCategory, ...categories ] );      
      }
      return (
        <>
          <div>   
            <div className="titleAppNeon">
               <h1>Gif App React</h1>
            </div>        
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
