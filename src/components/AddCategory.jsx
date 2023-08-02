import { useState } from 'react';


export const AddCategory = () => {
  
   const [ inputValue, setInputValue ] = useState('One Punch');

   //Desestructuramos el evento sacando el target
   const onInputChange = ( {target} ) => {
       // console.log(target.value);
         setInputValue(target.value);
   }

   const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);

   }


    return (

            <form onSubmit={ (event) => onSubmit(event) }> 
                <input
                    type="text"
                    placeholder="Buscar Gifs"   
                    value = { inputValue }  
                    //En esta forma recibo el evento y lo envio como parametro
                    //onChange = { (event) =>  onInputChange(event) }
                    //Otra forma de hacerlo es haciendo referencia unicamente a la funcion la cual ya recibe el target
                    onChange = { onInputChange }
                />  
            </form> 

        )
}
