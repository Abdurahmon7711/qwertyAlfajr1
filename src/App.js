import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from "./components/Pages/About";
import { Portfolio } from "./components/Pages/Portfolio";
import { Contact } from "./components/Pages/Contact";
import Footer from "./components/Pages/Footer";
import { Home } from "./components/Pages/Home";
import Team from "./components/Pages/Team";
 function App() {
  return (
    <>
      <Router>
        
        <NavBar />
        <Home />
        <About />
        <Portfolio /> 
        <Contact />     
        <Footer />  
        <Team />
      </Router>
    </>
  );
}

export default App;
