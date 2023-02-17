import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';
import logo from '../../Assets/logo.png'
function RecipeCard({name, image, lm, open, pic }) {
  const [ img, setImg ] = useState('');
  useEffect(()=>{
   if(image !== '') {
    setImg(image)
   } else {
    setImg(logo);
   }
  },[])

  return (
    <div className='recipecard'>
      <div className='recipeImage' onClick={pic}><Link to='/view'><img alt='No Image' src={img}/></Link></div>
      <div className='flex'>
      <div className='recipeContent'>
        <h2>{name}</h2>
        <p><i></i>{lm}</p>
      </div>
      <div className='actions'>
        <div className='view' onClick={open}>
        <i class="fa-solid fa-trash"></i>
        </div>

      </div>
      </div>
    </div>
  )
}

export default RecipeCard
