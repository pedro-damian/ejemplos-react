import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 




const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        {/* contenedor de Route */}
        <Routes>
          {/* define las las rutas */}
          <Route path="/" element= {<Inicio/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contacto" element= {<Contacto/>} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
