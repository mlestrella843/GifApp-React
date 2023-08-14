
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { GifApp } from './GifApp'

import './estilos.css';

 export const BienvenueApp = () => {

    const goToMainPage = () => {
            alert('Hola Maria');
            
    } 
  
    return (
    <div>
        <div className='titleInitial'>
               <h3> WELCOME TO GIF APP! </h3>
        </div>
        <div>
              <button onClick={ goToMainPage }>
                 <span>Click to Start!</span>
               </button>
        </div>
    </div>
  )

}





  
  
 
  

 

