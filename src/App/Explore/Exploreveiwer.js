import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";
import { Context } from '../../Hooks/Context';

function Exploreveiwer() {

    // Convert HTML content to PDF
    const print = (content) => {
     
        const doc = new jsPDF();
        // Source HTMLElement or a string containing HTML.
        const elementHTML = document.querySelector('.actualcontent').textContent;
    
        doc.text(elementHTML, 10, 10);
        doc.save(`${myRecipes[currentIndex].name}.pdf`);
    }
    
        const { myRecipes, currentIndex } = useContext(Context)
      return (
        <div>
            <section id='headersection'>
            <p>{myRecipes[currentIndex].name}</p>
         <button className='new'>
            Save to My Recipes
            </button>{'  '}
            <button className='new' onClick={()=>{window.history.back()}}>Back </button>
            </section>
            <section className='viewrecipe'>
                <div className='actualcontent' dangerouslySetInnerHTML={{__html: myRecipes[currentIndex].content}} />
                <br />
            <button className='new' style={{margin: '0px', position: "fixed", right: "10px", bottom: '20px'}} onClick={print}><i class="fa-sharp fa-solid fa-print"></i> Download</button>
            </section>
                </div>
      )
}

export default Exploreveiwer
