import React, {useContext} from 'react';
import { Context } from '../../Hooks/Context';
import './Delete.css'

function Delete({yes, close, recipeIndex}) {
  const { myRecipes, setrandchange } = useContext(Context);
  return (
    <div className='delcard'>
      Are you sure u want to Delete the {(myRecipes[recipeIndex].name) ? (myRecipes[recipeIndex].name) : 'none'} recipe?
      <br />
      <button style={{background: 'red'}} onClick={yes}>Yes, Delete</button>
      <button style={{background: 'green'}} onClick={()=>{close(); setrandchange('..')}}>No, Keep</button>
    </div>
  )
}

export default Delete
