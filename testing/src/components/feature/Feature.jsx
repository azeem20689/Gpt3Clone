import React from 'react'
import './feature.css';
function Feature({title, text}) {
  return (
    <div className='feature'>
      <div className="feature_container">
      <h1 className='featureTitle'>{title}</h1>
      </div>
      <div className="feature_container_text">
        {text}
      </div>
    </div>
  )
}

export default Feature
