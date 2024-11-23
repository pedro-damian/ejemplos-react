import React from "react";
import ListaContactos from "./ListaContactos";
import './App.css';

function App() {

  const contactos = [
    { nombre: "Pedro Enrique Damian Noriega", telefono: "987654321" },
    { nombre: "Juan Carlos Morales Guzmán", telefono: "968754342" },
    { nombre: "María Fernanda López Rivera", telefono: "963827154" },
    { nombre: "Pedro Enrique Damian Noriega", telefono: "987654321" },
    { nombre: "Juan Carlos Morales Guzmán", telefono: "968754342" },
    { nombre: "María Fernanda López Rivera", telefono: "963827154" },
    { nombre: "Pedro Enrique Damian Noriega", telefono: "987654321" },
    { nombre: "Juan Carlos Morales Guzmán", telefono: "968754342" },
    { nombre: "María Fernanda López Rivera", telefono: "963827154" },
  ];


  return (
    <div className="Container-Lista">
      <h1 className="title">Lista de Contactos</h1>
      <ListaContactos contactos={contactos} />
    </div>
  );
}

export default App;
