import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';
import logo from '../../Assets/logo.png'
import { Context } from '../../Hooks/Context';
function RecipeCard({name, image, lm, open, pic, index, heartpresent }) {
  const { myRecipes, setMyRecipes, setrandchange, randchange } = useContext(Context);
  const [favColorState, setFavColorState] = useState('#fff')

  const [ img, setImg ] = useState('');
  useEffect(()=>{
   if(image !== '') {
    setImg(image)
   } else {
    setImg(logo);
   }
  },[])

  useEffect(()=>{
    if(myRecipes[index].favorite === true) {
      setFavColorState('red')
     }  else {
      setFavColorState('white')
     }
  },[randchange])

  const update = () => {
    if (myRecipes[index].favorite === false) { 
    myRecipes[index].favorite = true;
    setMyRecipes(myRecipes);
    setrandchange('....')
    console.log(myRecipes[index])
    } else {
    myRecipes[index].favorite = false;
    setMyRecipes(myRecipes);
    console.log(myRecipes[index]);
    setrandchange('......')
    }
  }

  const Heart = ({heartpresent}) => {
    if (heartpresent) {
      return (<>
      <div className='view' onClick={open}>
      <i class="fa-solid fa-trash"></i>
      </div>
        <div className='view' style={{color: favColorState}} >
        <i class="fa-solid fa-heart" onClick={update}></i> 
        </div>
        </>
      )
    } else {
      return <></>
    }
  }
  

  return (
    <div className='recipecard'>
      <div className='recipeImage' onClick={pic}><Link to='/view'><img alt='No Image' src={img} draggable='false'/></Link></div>
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
