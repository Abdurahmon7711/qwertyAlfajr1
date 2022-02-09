import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Menu from './Menu';
import './pages.css';
import port_name from '../../img/Group 9.svg';
import { FaShare } from 'react-icons/fa';
import AOS from 'aos';

export const Portfolio = () => {

  const [show, setShow] = useState(true)
  const [items, setItem] = useState(Menu)

  const itemFiltr = (categitem) => {

    const UpdateItems = Menu.filter((curElement) => {
      return curElement.catigorio === categitem;

    });
    setShow(!show)
    setItem(UpdateItems);
  }
  AOS.init();
  return (
    <div id="portfolio">
      <Container>
        <Row>
          <img className='title_name' src={port_name} alt="title_name"></img>
          <div className="port_button">
            <button className="port_btn about_btn" onClick={() => setItem(Menu)}>All</button>
            <button className="port_btn about_btn" onClick={() => itemFiltr('web')}>Web </button>
            <button className="port_btn about_btn" onClick={() => itemFiltr('smm')}>Smm</button>
            <button className="port_btn about_btn" onClick={() => itemFiltr('moution')}>Moution</button>
            <button className="port_btn about_btn" onClick={() => itemFiltr('design')}>Design</button>
          </div>

          <div className="menu-items">


            {
              items.map((elem, index) => {
                console.log(elem);
                const { iframe } = elem;
                const { aLink } = elem;
                // var ifr = 
                // let doc = ifr.contentWindow || ifr.contentDocument;
                // console.log(doc);
                
                return (

                  <div data-aos="fade-up"
                    data-aos-anchor-placement="center-center" key={index} when={show} className="items col-lg-4">
                    <iframe  className="port-img" src={iframe} />
                    <a target="_blank" className='port-link about_btn' href={aLink} alt="link">Visit <FaShare className='port_icon' /> </a>

                  </div>
                )
              })
            }

          </div>
        </Row>

      </Container>
    </div>
  );
};
