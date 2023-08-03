
  import { useState } from "react";
  import { AddCategory } from "./components/AddCategory";

  export const GifApp = () => {

      const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);
     
      const onAddCategory = ( newCategory ) => {
          console.log( newCategory );
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
                    categories.map( category => {
                       return <li key={ category }>{ category } </li> 
                    })
                }
                </ol>                 
          </div>         
        </>
      )
}
