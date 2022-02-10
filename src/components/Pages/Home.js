import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img from '../../img/team_img/Rectangle 22.png'
import img1 from '../../img/team_img/Rectangle 28.png'
import img2 from '../../img/team_img/Rectangle 24.png'
import { Container } from "react-bootstrap";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <Container>
    <AutoplaySlider 
      className="header_slayd"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >

      <div className="header_img" data-src={img} />
      <div className="header_img" data-src={img2} />
      <div className="header_img" data-src={img2} />

    </AutoplaySlider>
  </Container>
);

export const Home = () => {
  return (
    <div id="home">
      {slider}
    </div>
  );
};

