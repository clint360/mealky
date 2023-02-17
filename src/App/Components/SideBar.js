import React from 'react';
import './SideBar.css';
import userPic from '../../Assets/me.png';
import { Link } from 'react-router-dom';

function SideBar({closer}) {
  return (
    <div className='sidenav'>
     <div className='closenav' onClick={closer}><i class="fa-solid fa-chevron-left"></i></div>
      <div className='info'>
        <div className='imagecontainer'>
         <img draggable={false} src={userPic} alt='' />
         <div className='edituser'><i class="fa-solid fa-user-pen"></i></div>
        </div>
        <div className='contact-details'>
          <h2>Chia Clint</h2>
          <p>+237680612360</p>
          <p>clintchia9@gmail.com</p>
        </div>
      </div>
      <div className='navigator'>
       <ul type='none'>
       <Link to='/explore'><li><i class="fa-brands fa-internet-explorer"></i> Explore</li></Link> 
       <Link to='/recipes'><li><i class="fa-solid fa-utensils"></i> Recipes</li></Link> 
       <Link to='/activity'> <li><i class="fa-regular fa-clipboard"></i> Activity</li></Link>
        <li><i class="fa-solid fa-right-from-bracket"></i> Log Out</li>
       </ul>
      </div>
      <div className='bottommost'>© Mealky 2023 - built by <strong>@clint360</strong></div>
    </div>
  )
}

export default SideBar
