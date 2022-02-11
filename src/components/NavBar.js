import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap"
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs'
import logo_img from "../img/main_logo.svg"
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState('');


  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <Container>
          <div className="nav-container">
            <a href="#" className="nav-logo">
              <img src={logo_img} alt="Logo Img"></img>
            </a>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  href="#home"
                  className={click1 === 1 ? "nav-links activee" : "nav-links"}
                  onClick={() => setClick1(1)}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className={click1 === 2 ? "nav-links activee" : "nav-links"}
                  onClick={() => setClick1(2)}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  className={click1 === 3 ? "nav-links activee" : "nav-links"}
                  onClick={() => setClick1(3)}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contack"
                  className={click1 === 4 ? "nav-links activee" : "nav-links"}
                  onClick={() => setClick1(4)}
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-link contack_items-nav">

                <a href="#"><BsFacebook className="contact_item" /></a>
                <a href="#"><BsInstagram className="contact_item" /></a>
                <a href="#"><BsYoutube className="contact_item" /></a>

              </li>

            </ul>
            <div className="contack_items">
              <a href="#"><BsFacebook className="contact_item" /></a>
              <a href="#"><BsInstagram className="contact_item" /></a>
              <a href="#"><BsYoutube className="contact_item" /></a>

            </div>
            <div className="nav-icon" onClick={handleClick} >
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default NavBar;
