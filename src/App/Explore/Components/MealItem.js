import React, { useContext } from "react";
import { Context } from "../../../Hooks/Context";
import { Link } from "react-router-dom";
//import './Components/style.css';
import './style.css';


const Mealitem=(getMeal)=>{
    const d = new Date()
    const datemodified = d.toDateString();
    var time = d.getHours() + ":" + d.getMinutes();
    const { setRecipeOnView } = useContext(Context);
    
   const set = () =>{ setRecipeOnView({
        name: getMeal.data.strMeal,
        lm: `${datemodified} , ${time}`, 
        image: getMeal.data.strMealThumb,
        content: `<img src='${getMeal.data.strMealThumb}'/>
        <b><p>Ingredients</p></b><ul>
        <li>${getMeal.data.strIngredient1}</li>
        <li>${getMeal.data.strIngredient2}</li>
        <li>${getMeal.data.strIngredient3}</li>
        <li>${getMeal.data.strIngredient4}</li>
        <li>${getMeal.data.strIngredient5}</li>
        <li>${getMeal.data.strIngredient6}</li>
        <li>${getMeal.data.strIngredient7}</li>
        <li>${getMeal.data.strIngredient8}</li>
        <li>${getMeal.data.strIngredient9}</li>
        <li>${getMeal.data.strIngredient10}</li>
        <li>${getMeal.data.strIngredient11}</li>
        <li>${getMeal.data.strIngredient12}</li>
        </ul>
        <br>
        <b><p>Procedure</p></b>
        <p>${getMeal.data.strInstructions}</p><br>
        </ul><br>
        <a href={getMeal.data.strSource}></a>`,  
        favorite: false
    })
   }

    console.log(getMeal.data)
    return(
        <>
             <div className="card">
             <div className="inner"><Link to='/eview'> <img src={getMeal.data.strMealThumb} alt="meal" onClick={set}/></Link></div>
                        <div className ="info">
                        <h2>{getMeal.data.strMeal}</h2>
                        <p>{getMeal.data.strArea} food</p>
                        </div>
            </div>  
        </>
    )
}
export default Mealitem;