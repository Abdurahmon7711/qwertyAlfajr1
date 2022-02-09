import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from "./components/Pages/About";
import { Portfolio } from "./components/Pages/Portfolio";
import { Contact } from "./components/Pages/Contact";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <About />
        <Portfolio /> 
        <Contact />       
      </Router>
    </>
  );
}

export default App;
