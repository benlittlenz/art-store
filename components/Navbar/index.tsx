import styled from 'styled-components';

export function Navbar() {
  return (
    <Nav>
      <Logo href="">Logo here</Logo>
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu>
        <NavLink href="">Home</NavLink>
        <NavLink href="">Shop</NavLink>
        <NavLink href="">About</NavLink>
        <NavLink href="">Contact</NavLink>
      </Menu>
    </Nav>
  );
}

const Nav = styled.nav`
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Hamburger = styled.div``;

const NavLink = styled.a`
  padding: 1rem 1.7rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.75px;
  font-family: Karla;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  color: #1f2937;
  transition: all 0.3s ease-in;

  &:hover {
    color: #111827;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
`;



