import React, { useState } from 'react';
import './SideBar.css';
import userPic from '../../Assets/me.png';
import { Link } from 'react-router-dom';
import EditUI from './EditUI';

function SideBar({closer}) {
  const [editDisplay, setEditDisplay] = useState('none')

  return (
    <div className='sidenav'>
      <div className='editUI' style={{display: editDisplay }}><EditUI close={()=>{setEditDisplay('none')}} /></div> 
     <div className='closenav' onClick={closer}><i class="fa-solid fa-chevron-left"></i></div>
      <div className='info'>
        <div className='imagecontainer'>
         <img draggable={false} src={userPic} alt='' />
         <div className='edituser' onClick={()=>{setEditDisplay('initial')}}><i class="fa-solid fa-user-pen"></i></div>
        </div>
        <div className='contact-details'>
          <h2>Chia Clint</h2>
          <p>+237680612360</p>
          <p>clintchia9@gmail.com</p>
        </div>
      </div>
      <div className='navigator'>
       <ul type='none'>
       <Link to='/favorites'> <li><i class="fa-regular fa-heart"></i>Favourites</li></Link>
       <Link to='/explore'><li><i class="fa-brands fa-internet-explorer"></i> Explore</li></Link> 
       <Link to='/recipes'><li><i class="fa-solid fa-utensils"></i> Recipes</li></Link> 
       <Link to='/activity'> <li><i class="fa-regular fa-clipboard"></i> Activity</li></Link>
       <Link to='/'><li><i class="fa-solid fa-right-from-bracket"></i> Log Out</li></Link> 
       </ul>
      </div>
      <div className='bottommost'>© Mealky 2023 - built with 😍 by <strong>@clint360</strong></div>
    </div>
  )
}

export default SideBar
