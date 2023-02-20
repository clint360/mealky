import './Favourites.css';
import React, { useContext, useEffect, useState } from 'react';
import RecipeCard from '../Components/RecipeCard';
import { Context } from '../../Hooks/Context';
import Delete from '../Components/Delete';
import { Link } from 'react-router-dom';


function Favourites() {
    const { myRecipes, setMyRecipes, setrandchange, currentIndex, setCurrentIndex } = useContext(Context);
    const [indexer, setIndexer] = useState(0)
    const [deleteModalPosition, setDeleteModalPosition] = useState('translateY(-400px)')
  
    const deleteRecipe = () => {
       if(myRecipes[indexer]) {
        myRecipes.splice(indexer, 1);
        setMyRecipes(myRecipes);
       }
       setDeleteModalPosition('translateY(-400px)');
       console.log(myRecipes)
       setrandchange('...')
    }
    
    const open = () => {
      setDeleteModalPosition('translateY(0px)');
    }
  
    const close = () => {
      setDeleteModalPosition('translateY(-400px)');
    }
  
    const pop = {
      transform: deleteModalPosition
    }
  
    useEffect(()=>{
       
      setMyRecipes(myRecipes);
    },)
  
    return (
      <div className='recipespage'>
               <div className='delpop' style={pop}> <Delete yes={deleteRecipe} close={close} recipeIndex={indexer} /> </div>
         <section id='headersection'>
          <p>FAVOURITES</p>    
          </section>
         <section className='recipecards here'> 
          {myRecipes.filter(obj => {
  return obj.favorite === true;
}).map((items, index) => { return (
         <RecipeCard name={items.name} 
         image={items.image} 
         lm={items.lm}
         open={()=>{open(); setIndexer(index)}}
         pic={()=>{setCurrentIndex(index)}}
         index={myRecipes.indexOf(items)}
         present={false}
          />
           )})}
         </section>
      </div>
    )
}

export default Favourites
