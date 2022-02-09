import React from "react";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import contackName from "../../img/Group 10.svg";

export const Contact = () => {
  return (
    <div id="contack">
      <Container>
        <Row>
          <img src={contackName} className="title_name" alt="name img"></img>
          <div className="contacmain">
            <form className="col-lg-5 col-md-12 contackForm">
              <input type="text" placeholder="Name"></input>
              <input type="email" placeholder="Email"></input>
              <input type="text" placeholder="Subject"></input>
            </form>

            <div className="col-lg-5 col-md-12 contack_btn">
              <textarea
                className="contackTextarea"
                placeholder="Message"
              ></textarea>
              <Button className="about_btn form_btn">Send</Button>
            </div>
            <div className="karta col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.9717687302727!2d69.26904791519706!3d41.37469807926526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d3a6e2eb289%3A0x8f7b877ac9078717!2sKalibri%20education%20I%20Colibri%20education!5e0!3m2!1sru!2s!4v1644387504510!5m2!1sru!2s" loading="lazy"></iframe>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
