import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="button">
        <div style={{border:'1px solid white',padding:'0.5rem',color:'white'}}>
          <p>Request Early Access</p>
        </div>
      </div>
      <div className="footer_links_container">
        <div className="left">
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK <br />Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="right">
          <div className="links">
            <h5>Links</h5>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="Company">
            <h5>Company</h5>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="get_in_touch">
            <h5>Get in touch</h5>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>Terms & Conditions</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <div>
        <p>info@payme.net</p>
      </div>
    </div>
  );
}

export default Footer;
