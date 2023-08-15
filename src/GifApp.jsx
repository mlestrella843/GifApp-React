
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
          <div className="container">   
            <h1> <span> Welcome to Gif App React! </span></h1>
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
