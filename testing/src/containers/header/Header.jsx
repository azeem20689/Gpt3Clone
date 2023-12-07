import React from "react";
import "./header.css";
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className="header_container">
      <div className="header_container_left">
        <div className="header_container_title gradient__text">
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <div className="header_container_content">
       <p> Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p> 
        </div>
        <div className="header_container_searchbox">
          <input type="email" placeholder="Your Email" />
          <button>Get Started</button>
        </div>
        <div className="header_container_left_image">
          <img src={people} alt="people image" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header_container_right">
      <img src={ai} alt="Ai image" />
      
      </div>
    </div>
  );
}

export default Header;
