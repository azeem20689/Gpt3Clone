import React from 'react'
import './brand.css';
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
function Brand() {
  return (
    <div className='main_container'>
      <div className="brand_container">
        <div className="google">
          <img src={google} alt="google" />
        </div>
        <div className="slack">
          <img src={slack} alt="slack" />
        </div>
        <div className="atlassian">
          <img src={atlassian} alt="atlassian" />
        </div>
        <div className="dropbox">
          <img src={dropbox} alt="dropbox" />
        </div>
        <div className="shopify">
          <img src={shopify} alt="shopify" />
        </div>
      </div>
    </div>
  )
}

export default Brand
