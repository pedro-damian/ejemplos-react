import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 300px;
  border: 2px solid #3498db;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: #f3f8fb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Nombre = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
`;

const Descripcion = styled.p`
  color: #7f8c8d;
  font-size: 14px;
`;

function TarjetaPresentacion(){
    return (
        <Container>
            <Avatar src="https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
            <Nombre>Pedro Enrique Damian Noriega</Nombre>
            <Descripcion>Estudiante apasionado por la informática y el desarrollo web. Aprendiendo React y styled-components.</Descripcion>
        </Container>
    );
}

export default TarjetaPresentacion;