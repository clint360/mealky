import React, { useState } from "react";
import Mealitem from "./MealItem";
import './style.css';
import './Meal.css';
import logo from '../../../Assets/logo.png'
const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key=="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
        }
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                   <div className="img"><img  src={logo} /></div> 
                </div>
                <div className="searchBox">
                    <input type="search" placeholder="Press Enter to view all" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Not found</p> : 
                         Mymeal.map((res)=>{
                             return(
                            <Mealitem data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>
        </>
    )
}
export default Meal;