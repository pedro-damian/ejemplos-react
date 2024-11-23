import styled from 'styled-components';

const FormularioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7fafc;
`;

const Formulario = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #2d3748;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  
  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 5px rgba(50, 132, 206, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2b6cb0;
  }
`;

function FormularioRegistro (){

  return (
    <FormularioContainer>
      <Formulario>
        <Titulo>Formulario de Registro</Titulo>
        
        <Input
          type="text"
          placeholder="Nombre"
        />
        <Input
          type="text"
          placeholder="Apellido"
        />
        <Input
          type="email"
          placeholder="Correo Electrónico"
        />
        <Button type="submit">Registrar</Button>
      </Formulario>
    </FormularioContainer>
  );
};

export default FormularioRegistro;