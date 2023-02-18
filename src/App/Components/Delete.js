import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../Hooks/Context';
import './Delete.css'

function Delete({yes, close, recipeIndex}) {
  const d = new Date()
  const datemodified = d.toDateString();
  var time = d.getHours() + ":" + d.getMinutes();
  const { myRecipes, setrandchange, setActivity } = useContext(Context);
  const [ name, setName ] = useState('this') 
  useEffect(()=>{
   if(recipeIndex !== null) {
     setName(myRecipes[recipeIndex].name)
   }
  },[])


  return (
    <div className='delcard'>
      Are you sure u want to Delete the {name} recipe?
      <br />
      <button style={{background: 'red'}} onClick={()=>{yes(); setActivity((prev)=> [...prev, {activity: `Deleted the ${name} recipe`, time: `${datemodified} , ${time}` }])}}>Yes, Delete</button>
      <button style={{background: 'green'}} onClick={()=>{close(); setrandchange('..')}}>No, Keep</button>
    </div>
  )
}

export default Delete
