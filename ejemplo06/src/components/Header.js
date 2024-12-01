import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`

const Logo = styled.h1`
  color: #ecf0f1;
  margin: 0;
  font-size: 1.5rem;
`

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`

const StyledLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  border-radius: 4px;

  &:hover {
    background-color: #34495e;
  }

  &.active {
    background-color: #3498db;
  }
`


const Header = () => {
    return (
      <HeaderContainer>
        <Logo>Mi Blog</Logo>
        <Nav>
          <StyledLink to="/">Inicio</StyledLink>
          <StyledLink to="/blog">Blog</StyledLink>
          <StyledLink to="/contacto">Contacto</StyledLink>
        </Nav>
      </HeaderContainer>
    )
  }
  
  export default Header;