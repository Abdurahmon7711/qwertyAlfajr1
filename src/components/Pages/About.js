import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import './pages.css';
import Img_about from "../../img/iPhone 1.png"
import about_name from "../../img/Group 8.svg"
import Team from "./Team";
import { Link } from "react-router-dom";

export const About = () => {
  function onClick1(){
    window.location.href="Pages/Team.js";
}
  return (
    <div className="about">
      <Container>
        <Row>

          <img className="title_name" src={about_name} alt="name"></img>

          <section className="about_main col-lg-10 col-md-12">
            <div className="col-lg-6 col-sm-12">
              <h3 className="about_title">Lorem Ispum is simply</h3>
              <p className="about_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer
                took a galley of type and scrambled it tomake a type specimen book. </p>
              <a  onClick={onClick1} className="about_btn" >Our Team</a>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img className="about_img" src={Img_about} alt="about_img"></img>
            </div>
          </section>
        </Row>
      </Container>
    </div>

  );
};
