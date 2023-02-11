import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className='sidenav'>
     <div className='closenav'><i class="fa-solid fa-chevron-left"></i></div>
      <div className='info'>
        <div className='imagecontainer'>
         <img src='https://i.pinimg.com/736x/17/62/81/1762813b82598d538df129736ec09d16.jpg' alt='' />
        </div>
        <div className='contact-details'>
          <h2>Chia Clint</h2>
          <p>+237680612360</p>
          <p><i>clintchia9@gmail.com</i></p>
        </div>
      </div>
      <div className='navigator'>
        <p>• Home</p>
        <p>• Recipes</p>
        <p>• Notes</p>
      </div>
      <div className='bottommost'>© Mealky 2023 - built by <strong>@clint360</strong></div>
    </div>
  )
}

export default SideBar
