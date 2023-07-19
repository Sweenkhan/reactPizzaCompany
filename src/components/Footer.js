import React from 'react'

function Footer() {

  let openHour = 12;
  let closeHour = 22;
  const date = new Date();
 
const localHourUTC = date.getUTCHours(); 
const indianTimeOffset = 5.5; // IST is UTC+5:30
const localHourIST = (localHourUTC + indianTimeOffset) % 24;

   
  return (
    <div className='footer'>
     
      <p> We're Happy to welcome you between {openHour}:00 and {closeHour}:00 </p>
       
      <div className={(localHourIST > openHour) ? "order" : "close" }>
      <button className='btn'>Order now</button>
      </div>
    </div>
  )
}

export default Footer