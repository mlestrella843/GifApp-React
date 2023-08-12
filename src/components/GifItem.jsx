
import React from 'react';

export const GifItem = ( { title, url, id }) => {
  return (

    <div className="card"> 
        <img src= { url } alt={ title } />
        <h3> { title } </h3>
    </div>

  )

}
