import React, { useState } from "react";
import f_logo from '../../image/f_logo.png'
import './Navbar.css'
import $ from 'jquery';
import { Link } from 'react-router-dom'

export default function NavBarResp() {
  const [navToggle, setnavToggle] = useState(true)

  $(document).ready(function () {

    //Mobile hamburger open and close
    $(".hamburger").click(function () {
      // console.log("hamburger clcked")
      // $("#header").addClass("mobile-open");
      $("#contacto").toggleClass("link-contact", navToggle);
      $("#header").toggleClass("mobile-open", navToggle);
      $("#nav-items-holder").toggleClass("nav-options-active");
     
     
      setnavToggle(!navToggle);
    });


  });



  return (

    <nav id="header" className="glass header-close ">
      <div id="nav-container">
        <div id="logo-holder">
        <Link to="hero-home" spy={true} smooth={true} className="link">
        <img id="logo" src={f_logo} alt="" />
            </Link>

          <input id="toggle" type="checkbox"></input>

          <label htmlFor="toggle" className="hamburger">
            <div className="top-bun"></div>
            <div className="meat"></div>
            <div className="bottom-bun"></div>
          </label>

        </div>

        <div id="nav-items-holder" className="nav-options-active" 
        style={{display:'flex',justifyContent:'center', textAlign:'center', alignContent:'center'}}
        >
          {/* <!-- about --> */}
          <div id="n-home">

            <Link to="/" spy={true} smooth={true} className="link">
              Home
            </Link>

          </div>
          {/* <!-- about --> */}
          <div id="n-about" style={{textAlign:'center'}}>

            <Link to="/about" spy={true} smooth={true} className="link" style={{textAlign:'center'}}>
              About
            </Link>

          </div>

          <div id="n-services" style={{textAlign:'center'}}>

            <Link to="/services" spy={true} smooth={true} className="link">
              Services
            </Link>

          </div>

          <div id="n-portfolio" style={{textAlign:'center'}}>

            <Link to="/portfolio" spy={true} smooth={true} className="link" style={{textAlign:'center'}}>
              Portfolio
            </Link>

          </div>

        </div>
        <div id="contacto">

          <Link to="/contact" spy={true} smooth={true} 
          duration={500}
          className="link link-contact"
          >
            
            <p style={{ width: "160px" ,color:'#0090ee', textAlign:'center'}}>Contact &nbsp;Us</p>
          </Link>

        </div>
      </div>
    </nav>
  )
}