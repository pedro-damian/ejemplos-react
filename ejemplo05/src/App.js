import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";   /* npm install react-router-dom */
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element= {<Contact/>} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
