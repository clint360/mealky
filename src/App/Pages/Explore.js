import React from 'react';
import './Explore.css';
import Meal from '../Explore/Components/Meal';

function Explore() {
  return (
    <div>
        <section id='headersection'>
        <p>Explore</p>
        </section>
        <section className='explore'>
        {/* <iframe src="https://www.themealdb.com" className='frame'></iframe> */}
        <Meal />
        </section>
    </div>
  )
}

export default Explore
