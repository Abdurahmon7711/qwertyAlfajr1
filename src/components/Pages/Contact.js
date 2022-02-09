import React from "react";
import { Container, Form, InputGroup, Row } from "react-bootstrap";
import contackName from '../../img/Group 10.svg'

export const Contact = () => {
  return (
    <div id="contack">
      <Container>
        <Row>
          <img src={contackName} className='title_name' alt="name img" ></img>
          <div className="contacmain">
            <form>
              <input type='text' placeholder="Name"></input>
              <input type='email' placeholder="Email"></input>
              <input type='text' placeholder="Subject"></input>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};
