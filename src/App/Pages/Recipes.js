import React, { useContext, useEffect, useState } from 'react';
import RecipeCard from '../Components/RecipeCard';
import { Context } from '../../Hooks/Context';
import './Recipes.css';
import Delete from '../Components/Delete';
import { Link } from 'react-router-dom';



function Recipes() {
  const { myRecipes, setMyRecipes, setrandchange, setCurrentIndex } = useContext(Context);
  const [indexer, setIndexer] = useState(0)
  const [deleteModalPosition, setDeleteModalPosition] = useState('translateY(-400px)')

  const deleteRecipe = () => {
    if (myRecipes[indexer]) {
      myRecipes.splice(indexer, 1);
      setMyRecipes(myRecipes);
    }
    setDeleteModalPosition('translateY(-1000px)');
    console.log(myRecipes)
    setrandchange('...')
  }

  const open = () => {
    setDeleteModalPosition('translateY(0px)');
  }

  const close = () => {
    setDeleteModalPosition('translateY(-1000px)');
  }

  const pop = {
    transform: deleteModalPosition
  }

  useEffect(() => {

    setMyRecipes(myRecipes);
  },)

  return (
    <div className='recipespage'>
      <div className='delpop' style={pop}> <Delete yes={deleteRecipe} close={close} recipeIndex={indexer} /> </div>
      <section id='headersection'>
        <p>YOUR RECIPES</p>
        <Link to='/newrecipe'><button className='new'>New Recipe</button></Link>
      </section>
      <section className='searchSection'>
        <input type='text' placeholder='Search for a recipe' />
      </section>
      <section id='recipecards'>
        {myRecipes.map(({name, image, lm, favorite}, index) => {
          return (
            <RecipeCard name={name}
              image={image}
              lm={lm}
              open={() => { open(); setIndexer(index) }}
              pic={() => { setCurrentIndex(index) }}
              index={index}
              heartpresent={true}
              fav = {favorite}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Recipes
