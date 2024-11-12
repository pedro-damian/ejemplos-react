import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Button = styled.button`
  background-color: #6200ea;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover{
    background-color: #3700b3;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
`;


function App() {
  return (
    <Container>
      <Title>Bienvenido a Interbank</Title>
      <Button>Haz Click Aqui</Button>
    </Container>
  );
}

export default App;
