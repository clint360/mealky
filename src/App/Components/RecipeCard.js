/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';
import logo from '../../Assets/logo.png'
import { Context } from '../../Hooks/Context';

function RecipeCard({ name, lm, image, open, pic, index, heartpresent}) {
  const { myRecipes, setMyRecipes } = useContext(Context);
  const [favState, setFavState] = useState(true);

  const update = () => {
    setFavState((prev) => !prev);
    myRecipes[index].favorite = favState;
    setMyRecipes([...myRecipes]);
    console.log(myRecipes[index])
  }

  const Heart = ({ heartpresent }) => {
    const { myRecipes } = useContext(Context);
  

    if (heartpresent) {
      return (<>
        <div className='view' onClick={open}>
          <i class="fa-solid fa-trash"></i>
        </div>
        <div className='view' >
          {
            myRecipes[index].favorite ? <i class="fa-solid fa-heart" style={{ color: 'red' }} onClick={update}></i> : <i class="fa-solid fa-heart" style={{ color: 'white' }} onClick={update}></i>
          }
        </div>
      </>
      )
    } else {
      return <></>
    }
  }


  return (
    <div className='recipecard'>
      <div className='recipeImage' onClick={pic}>
        <Link to='/view'>
          {
            image === "" ? <img alt='No img' src={logo} /> : <img alt='No img' src={image} />
          }
        </Link></div>
      <div className='flex'>
        <div className='recipeContent'>
          <h2>{name}</h2>
          <p><i></i>{lm}</p>
        </div>
        <div className='actions'>
          <Heart heartpresent={heartpresent} />
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
