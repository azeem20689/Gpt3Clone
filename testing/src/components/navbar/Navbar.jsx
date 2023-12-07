import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menue = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
      <p>
        <a href="#possibiity">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

function Navbar() {
  const [toggleMenue, setToggleMenue] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar_links">
        <div className="gpt3__navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar_links_container">
          <Menue />
        </div>
        <div className="gpt3__navbar_sign">
          <p>Sign in</p>
          <button>Sign up</button>
        </div>
        <div className="gtp3__navbar_menue">
          {toggleMenue ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenue(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenue(true)}
            />
          )}
          {toggleMenue && (
            <div className="gpt3__navbar_menue_container scale-up-center">
              <div className="gpt3__navbar_menue_container_links">
                <Menue />
                <div className="gpt3__navbar_menue_container_links_sign">
                  <p>Sign in</p>
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
