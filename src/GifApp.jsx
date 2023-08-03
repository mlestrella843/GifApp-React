
  import { useState } from "react";
  import { AddCategory } from "./components/AddCategory";

  export const GifApp = () => {

      const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);
     
      const onAddCategory = ( newCategory ) => {
          //console.log( newCategory );
          if( categories.includes(newCategory) ) return; 
          setCategories( [ newCategory, ...categories ] );      
      }
      return (
        <>
          <div className="container mt-1"> 
            {/* Title */}
            <h1>Gif App React</h1>
            {/* { Input */}
            <AddCategory 
                onNewCategory = { onAddCategory }              
            />
            {/* Listado fr Gifs */}
            <br/>
                <ol>
                {
                    categories.map( category => (
                          <div key={ category }> 
                              <h3>{ category }</h3>
                             <li >{ category } </li> 
                          </div>
                       ))                  
      
                }
                </ol>                 
          </div>         
        </>
      )
}
