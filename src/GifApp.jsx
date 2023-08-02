
  import { useState } from "react";
  import { AddCategory } from "./components/AddCategory";
  // import Button from 'react-bootstrap/Button';
  // import Form from 'react-bootstrap/Form';
  // import InputGroup from 'react-bootstrap/InputGroup';

  export const GifApp = () => {

      const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);
     
      const onAddCategory = () => {
          setCategories([ 'valor', ...categories ]);
        
      }
      return (
        <>
          <div className="container mt-1"> 
            {/* Title */}
            <h1>Gif App React</h1>
            {/* { Input */}
            <AddCategory setCategories = { setCategories } />
            {/* Listado fr Gifs */}
            <br/>
                {/* Gif Item */}
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
