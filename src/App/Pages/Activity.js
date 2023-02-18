import React, { useContext } from 'react';
import './Activity.css';
import { Context } from '../../Hooks/Context';

function Activity() {
  const { activity } = useContext(Context);
  return (
    <div>
        <section id='headersection'>
        <p>RECENT ACTIVITY</p>
        </section>
        <section className='pastactivities'>
         <div className='headera'>
         <div className='onehalf'>Activity</div>
         <div className='onehalf'>Date</div>
         </div>
         <div className='activities1'>
          {activity.map((item)=>{return (
            <div className='activities'>
          <div className='onehalf1 left'>{item.activity}</div>
          <div className='onehalf1'>{item.time}</div>
          </div>
          )})}
         </div>
        </section>
    </div>
  )
}

export default Activity
