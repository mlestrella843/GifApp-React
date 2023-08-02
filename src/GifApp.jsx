
  import { useState } from "react";
  import { AddCategory } from "./components/AddCategory";
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import InputGroup from 'react-bootstrap/InputGroup';

  export const GifApp = () => {

      const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);
      //console.log(categories);
      //Funcion que agrega una categoria
      const onAddCategory = () => {
          //console.log('valor');
          //los tres puntos delante significa que hara un espejo de todo lo que contiene el arreglo categories
          //setCategories([ ...categories, 'valor']);
          //Los nuevos valores se alnmacenan en categories, setCategories es solo la funcion para alterar el estado
          //de categories
          //Si el nuevo valor se quiere insertar al inicio se coloca asi
          setCategories([ 'valor', ...categories ]);
          console.log(categories);
      }
      return (
        <>
          <div className="container mt-1"> 
            {/* Title */}
            <h1>Gif App React</h1>
         
            {/* { Input */}

            <AddCategory />

             {/* <input className="mb-3 border border-dark w-25" />  */}

            {/* Listado fr Gifs */}

            <br/>
            <Button variant="primary mt-2" onClick={ onAddCategory }>Add Category</Button>
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
