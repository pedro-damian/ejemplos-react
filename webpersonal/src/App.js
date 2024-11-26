import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 

import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Ubicacion from "./components/Ubicacion";
import Informacion from "./components/Informacion"; 


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/ubicacion">Ubicacion</Link></li>
            <li><Link to="/informacion">Informacion</Link></li>
          </ul>
        </nav>

        {/* contenedor de Route */}
        <Routes>
          {/* define las las rutas */}
          <Route path="/" element= {<Inicio/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/ubicacion" element= {<Ubicacion/>} />
          <Route path="/informacion" element= {<Informacion/>} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
