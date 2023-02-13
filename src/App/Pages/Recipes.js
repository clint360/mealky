import React from 'react';
import RecipeCard from '../Components/RecipeCard';
import './Recipes.css';
import { myRecipies } from '../Data/myRecipes';

function Recipes() {
  return (
    <div className='recipespage'>
       <section id='headersection'>
        <p>YOUR RECIPES</p>
        <button className='new'>New Recipe</button>
        </section>
       <section id='recipecards'>
        {myRecipies.map((items) => { return (
       <RecipeCard name={items.name} image={items.image} lm={items.lm} origin={items.content.origin} />
         )})}
       </section>
    </div>
  )
}

export default Recipes
