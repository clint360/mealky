import './Face.css';
import Recipes from './Pages/Recipes';
import './Face.css'
import React, { useState } from 'react'
import SideBar from './Components/SideBar';
import NewRecipe from './Pages/NewRecipe';

function Face() {
  const [nav, setNav] = useState('translateX(-500px)');
  const openNav = () => {
    setNav('translateX(0px)')
  }
  
  const closeNav = () => {
    setNav('translateX(-500px)')
  }

  const side = {
    transform: nav
  }

  return (
    <div className='mainface' >
      <div className='navigate' onClick={openNav}><i class="fa-solid fa-bars"></i></div>
      <div className='sidebar' style={side}><SideBar closer={closeNav}/></div>
      <div className='right' onClick={closeNav}><NewRecipe /></div>
    </div>
  )
}

export default Face
