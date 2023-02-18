import React from "react";
//import './Components/style.css';
import './style.css';
const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
             <div className="card">
                        <img src={getMeal.data.strMealThumb} alt="meal"/>
                        <div className ="info">
                        <h2>{getMeal.data.strMeal}</h2>
                        <p>{getMeal.data.strArea} food</p>
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>{getMeal.data.strIngredient1}</p>
                            <p>{getMeal.data.strIngredient2}</p>
                            <p>{getMeal.data.strIngredient3}</p>
                            <p>{getMeal.data.strIngredient4}</p>
                            <p>{getMeal.data.strIngredient5}</p>
                            <p>{getMeal.data.strIngredient6}</p>
                            <p>{getMeal.data.strIngredient7}</p>
                            <p>{getMeal.data.strIngredient8}</p>
                            <p>{getMeal.data.strIngredient9}</p>
                            <p>{getMeal.data.strIngredient10}</p>
                            <p>{getMeal.data.strIngredient11}</p>
                            <p>{getMeal.data.strIngredient12}</p>
                            <p>{getMeal.data.strInstructions}</p>
                            <img src={getMeal.data.strMealThumb}/>
                            <a href={getMeal.data.strSource}>Watch video</a>
                        </div>
            </div>  
        </>
    )
}
export default Mealitem;