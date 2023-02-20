import React from 'react';
import './Landing.css';
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='landingPage'>
        <section className='navbar'>
        <div className='nav'>
            <p>Welcome</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <div className='buttons'><button>Log In</button>
       <Link to='/recipes'><button>Get Started</button></Link> </div>
        </section>
      <section className='hero'>
       <div className='welcome'>
        <h1>Welcome to </h1>
      <div className='logo'><img src={logo} alt='' /></div> 
      <div className='text'>
      
      </div>
       </div>
       <div className='food'>
       Enjoy the best and Trending Recipes from all around the world,
       We provide the best recipe management methods.
       <div className='buttons'><button>Start Now</button></div>
        </div>
      </section>
    </div>
  )
}

export default Landing
