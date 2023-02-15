import React, { useContext } from 'react';
import { appProvider } from '../../Hooks/Context';
import RecipeCard from '../Components/RecipeCard';
import './Recipes.css';



function Recipes() {
  const myRecipes = useContext(appProvider)

  return (
    <div className='recipespage'>
       <section id='headersection'>
        <p>YOUR RECIPES</p>
        <button className='new'>New Recipe</button>
        </section>
       <section id='recipecards'>
        {myRecipes.map((items) => { return (
       <RecipeCard name={items.name} image={items.image} lm={items.lm} origin={items.content.origin} />
         )})}
       </section>
    </div>
  )
}

export default Recipes
