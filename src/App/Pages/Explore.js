import React from 'react';
import './Explore.css'

function Explore() {
  return (
    <div>
        <section id='headersection'>
        <p>Explore</p>
        </section>
        <section className='explore'>
        <iframe src="https://www.themealdb.com" className='frame'></iframe>
        </section>
    </div>
  )
}

export default Explore
