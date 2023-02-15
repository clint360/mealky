/* eslint-disable no-sequences */
import './Face.css';
import Recipes from './Pages/Recipes';
import './Face.css'
import React, { useState } from 'react'
import SideBar from './Components/SideBar';
import NewRecipe from './Pages/NewRecipe';
import { appProvider } from '../Hooks/Context';
import food from './../Assets/fufu.jpeg'
function Face() {
  const [myRecipes, setMyRecipes] = useState([
    {name: 'Corn Fufu', image: {food}, lm: '12/30/20', content: {origin: 'cameroon', value: 'How to'}}
  ])
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
    <appProvider value={ myRecipes, setMyRecipes }>
    <div className='mainface' >
      <div className='navigate' onClick={openNav}><i class="fa-solid fa-bars"></i></div>
      <div className='sidebar' style={side}><SideBar closer={closeNav}/></div>
      <div className='right' onClick={closeNav}><Recipes/></div>
    </div>
    </appProvider>
  )
}

export default Face
