import React, { useContext } from 'react';
import { jsPDF } from "jspdf";
import { Context } from '../../Hooks/Context';
import { Link } from 'react-router-dom';
import ViewRecipe from '../Pages/ViewRecipe';


function Exploreveiwer() {
    const { recipeOnView, setMyRecipes, setActivity } = useContext(Context);

    // Convert HTML content to PDF
    const print = (content) => {
     
        const doc = new jsPDF();
        // Source HTMLElement or a string containing HTML.
        const elementHTML = document.querySelector('.actualcontent').textContent;
    
        doc.text(elementHTML, 10, 10);
        doc.save(`${recipeOnView.name}.pdf`);
    }
    
      return (
        <div>
            <section id='headersection'>
            <p>{recipeOnView.name}</p>
        <Link to='/recipes'><button className='new' onClick={()=>{setMyRecipes((prev)=>[...prev, recipeOnView]); setActivity((prev)=> [...prev, {activity: `Added the ${recipeOnView.name} recipe  from Explore`, time: `${recipeOnView.lm}` }])}}>
            Save to My Recipes
            </button></Link> {'  '}
            <button className='new' onClick={()=>{window.history.back()}}>Back </button>
            </section>
            <section className='viewrecipe'>
                <div className='actualcontent' dangerouslySetInnerHTML={{__html: recipeOnView.content}} />
                <br />
            <button className='new' style={{margin: '0px', position: "fixed", right: "10px", bottom: '20px'}} onClick={print}><i class="fa-sharp fa-solid fa-print"></i> Download</button>
            </section>
                </div>
      )
}

export default Exploreveiwer
