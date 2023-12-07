import React from 'react'
import './possibility.css'
import girl from '../../assets/possibility.png'
function Possibility() {
  return (
    <div>
    <div className='possibility'>
      <div className="image">
        <img src={girl} alt="" />
      </div>
      <div className="text">
            <p style={{color:'skyblue'}}>Request Early Access to Get Started</p>
            <h3 className='gradient__text'>The possibilities are beyond your imagination</h3>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <p style={{color:'darkorange'}}>Request Early Access to Get Started</p>
      </div>
    </div>
    <div className="banner">
     <div className="possibilityText">
      <p>Request Early Access to Get Started</p>
      <h3>Register today & start exploring the endless possiblities.</h3>
     </div>
     <div className="possibilityButton">
      <button>Get Started</button>
     </div>
    </div>
    </div>
    
  )
}

export default Possibility
