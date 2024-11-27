import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import Post from "./components/Post";
import Contacto from "./components/Contacto";
import Error404 from "./components/Error404";
import Header from "./components/Header";

function App() {
  return (
    <Router>
        <Header/>

        {/* contenedor de Route */}
        <Routes>
          {/* define las las rutas */}
          <Route path="/" element= {<Inicio/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:id" element= {<Post/>} />
          <Route path="/contacto" element= {<Contacto/>} />
          <Route path="*" element= {<Error404/>} />
        </Routes>

    </Router>
  );
};

export default App;
