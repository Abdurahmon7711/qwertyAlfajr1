import React, { useState } from "react";
import NavBar from "../NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import Footer from "./Footer";
import { Home } from "./Home";
import TopFixed from "./TopFixed";


function Main() {

  return (
    <>
     
       
        {/* <Loader /> */}
        <NavBar />
        <TopFixed />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        
         
 
    </>
  );
}

export default Main;
