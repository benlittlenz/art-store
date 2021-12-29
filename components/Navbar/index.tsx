import { useState } from "react";
import styled from 'styled-components';
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

export function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);
  return (
    <Nav>
      <Logo href="">Logo here</Logo>
      <Hamburger onClick={() => setOpenHamburger(!openHamburger)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu hamburgerOpen={openHamburger}>
        <NavLink href="">Home</NavLink>
        <NavLink href="">Shop</NavLink>
        <NavLink href="">About</NavLink>
        <NavLink href="">Contact</NavLink>
        <SearchNavIcon />
        <CartNavIcon />
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

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

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

const SearchNavIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  padding-right: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartNavIcon = styled(ShoppingCartIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ hamburgerOpen }) => hamburgerOpen ? '300px' : '0'};
    transition: max-height 0.2s ease-in;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
`;



