import React from 'react'
import pizzaData from '../data' 


function Menu() {


  return (
    <div className='menu'> 
        <h2>OUR MENU</h2>
        <p>Authentic italian cuisine, 6 creative dishes to choose from . all from our store owen. all organuc. all delicious</p>
       
       <div className='pizzas'>
        {
          pizzaData.map((pizza, index) => {
             return <div className={(pizza.soldOut) ? "pizza sold-out" : "pizza" } key={index}>
      
                <img alt='pizaImg' src={pizza.photoName}></img>
             
              <div className='pizza div'>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <p> {(pizza.soldOut) ? <span>SOLD OUT</span> : pizza.price} </p>
              </div>
             </div>
          })
        }
       </div>
    </div>
  )
}

export default Menu