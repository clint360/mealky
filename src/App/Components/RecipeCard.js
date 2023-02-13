import React from 'react';
import './RecipeCard.css'

function RecipeCard({name, image, lm, origin}) {
  return (
    <div className='recipecard'>
      <div className='recipeImage'><img src='https://i.ytimg.com/vi/yTnLJPJdbiA/maxresdefault.jpg'/></div>
      <div className='flex'>
      <div className='recipeContent'>
        <h2>{name}</h2>
        <p><i>Last Modified: </i>{lm}</p>
        <p><i>From: </i>{origin}</p>
      </div>
      <div className='actions'>
        <div className='view'>
        <i class="fa-solid fa-eye"></i>
        </div>
        <div className='modify'> 
        <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>
      </div>
    </div>
  )
}

export default RecipeCard
