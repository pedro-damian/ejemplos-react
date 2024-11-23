import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

const Lista = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 400px;
  margin: auto;
`;

const ContactoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Icono = styled(FaUserCircle)`
  font-size: 30px;
  color: #3498db;
  margin-right: 15px;
`;

const Nombre = styled.h3`
  margin: 0;
  color: #2c3e50;
`;

const Telefono = styled.p`
  margin: 0;
  color: #7f8c8d;
  font-size: 14px;
`;

const ListaContactos = ({ contactos }) => {
  return (
    <Lista>
      {contactos.map((contacto, index) => (
        <ContactoItem key={index}>
          <Icono />
          <div>
            <Nombre>{contacto.nombre}</Nombre>
            <Telefono>{contacto.telefono}</Telefono>
          </div>
        </ContactoItem>
      ))}
    </Lista>
  );
};

export default ListaContactos;