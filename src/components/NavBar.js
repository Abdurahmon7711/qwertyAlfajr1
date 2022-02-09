import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {Container} from "react-bootstrap"
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs'
import logo_img from "../img/main_logo.svg"
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <Container>
          <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo_img} alt="Logo Img"></img>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            
          </ul>
          <div className="contack_items">
            <BsFacebook className="contact_item"/>
            <BsYoutube className="contact_item"/>
            <BsInstagram className="contact_item"/>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default NavBar;
