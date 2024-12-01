import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import React from "react";
import styles from "./App.module.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>Inicio</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>Sobre de</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>Contacto</Link>
            </li>
          </ul>
        </nav>

        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
