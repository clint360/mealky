import React from 'react';
import './Activity.css'

function Activity() {
  return (
    <div>
        <section id='headersection'>
        <p>ACTIVITY</p>
        <button className='new'>PRINT </button>
        </section>
        <section className='pastactivities'>
         <div className='headera'>
         <div className='onehalf'>Activity</div>
         <div className='onehalf'>Date</div>
         </div>
        </section>
    </div>
  )
}

export default Activity
