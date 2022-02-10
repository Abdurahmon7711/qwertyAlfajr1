import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from "./components/Pages/About";
import { Portfolio } from "./components/Pages/Portfolio";
import { Contact } from "./components/Pages/Contact";
import Footer from "./components/Pages/Footer";
import { Home } from "./components/Pages/Home";
import Team from "./components/Pages/Team";
import Loader from "./components/Loader/MyLoader"

function App() {

  return (
    <>
      <Router>
       
        {/* <Loader /> */}
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />


      </Router>
    </>
  );
}

export default App;
