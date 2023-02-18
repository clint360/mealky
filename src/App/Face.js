/* eslint-disable no-sequences */
import './Face.css';
import Recipes from './Pages/Recipes';
import './Face.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar';
import NewRecipe from './Pages/NewRecipe';
import ViewRecipe from './Pages/ViewRecipe';
import EditRecipe from './Pages/EditRecipe'
import Activity from './Pages/Activity';
import Explore from './Pages/Explore';
import Landing from '../Landing/Landing';
import Exploreveiwer from './Explore/Exploreveiwer';
import Favourites from './Pages/Favourites';

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
      <Router>
      <div className='navigate' onClick={openNav}><i class="fa-solid fa-bars"></i></div>
      <div className='sidebar' style={side}><SideBar closer={closeNav}/></div>
      <div className='right' onClick={closeNav}>     
        <Routes>
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/favorites' element={<Favourites />} />
          <Route path='/newrecipe' element={<NewRecipe />} />
          <Route path='/view' element={<ViewRecipe />} />
          <Route path='/edit' element={<EditRecipe />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/eview' element={<Exploreveiwer />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </div>
      </Router>
    </div>
  )
}

export default Face
