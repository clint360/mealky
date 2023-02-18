import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../Hooks/Context';
import './Delete.css'

function Delete({yes, close, recipeIndex}) {
  const d = new Date()
  const datemodified = d.toDateString();
  var time = d.getHours() + ":" + d.getMinutes();
  const { myRecipes, setrandchange, setActivity } = useContext(Context);



  return (
    <div className='delcard'>
      Are you sure u want to Delete this recipe?
      <br />
      <button style={{background: 'red'}} onClick={()=>{yes(); setActivity((prev)=> [...prev, {activity: `Deleted the ${myRecipes[recipeIndex]} recipe`, time: `${datemodified} , ${time}` }])}}>Yes, Delete</button>
      <button style={{background: 'green'}} onClick={()=>{close(); setrandchange('..')}}>No, Keep</button>
    </div>
  )
}

export default Delete
