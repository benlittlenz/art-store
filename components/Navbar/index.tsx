import { useState, useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { CartContext } from "../../context/shopContext";

export function Navbar() {
  const router = useRouter();

  const { cart } = useContext(CartContext)

  const [pathName, setPathName] = useState(router.pathname);
  const [openHamburger, setOpenHamburger] = useState(false);

  let cartQuantity = 0;
  cart.map(item => cartQuantity += item?.variantQuantity)
  return (
    <NavWrapper>
      <DeliveryBanner>
        Get free delivery on orders over $100 around New Zealand
      </DeliveryBanner>
      <Nav>
        <Logo href="">
          <Image src="/eam-logo.png" width={141} height={115} />
        </Logo>
        <Hamburger onClick={() => setOpenHamburger(!openHamburger)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu hamburgerOpen={openHamburger}>
          <Link href="/" passHref>
            <StyledLink onClick={setPathName} pathname={pathName}>
              Home
            </StyledLink>
          </Link>
          <Link href="/shop" passHref>
            <StyledLink onClick={setPathName} pathname={pathName}>
              Shop
            </StyledLink>
          </Link>
          <Link href="/about" passHref>
            <StyledLink onClick={setPathName} pathname={pathName}>
              About
            </StyledLink>
          </Link>
          <Link href="/contact" passHref>
            <StyledLink onClick={setPathName} pathname={pathName}>
              Contact
            </StyledLink>
          </Link>
          <SearchNavIcon />
          <CartNavIcon />
          Cart ({cartQuantity})
        </Menu>
      </Nav>
    </NavWrapper>
  );
}

const NavWrapper = styled.header`
  position: relative;
  background-color: white;
`;

const DeliveryBanner = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 0.2rem;
  background-color: #818cf8;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  height: 1.8rem;
  margin-bottom: -10px;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

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

const StyledLink = styled.a`
  padding: 1rem 1.6rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.75px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => (props.href === props.pathname ? "#6366f1" : "#1f2937")};
  border-bottom: ${(props) =>
    props.href === props.pathname
      ? "2px solid #a5b4fc"
      : "1px solid transparent"};
  transition: all 0.3s ease-in;

  &:hover {
    color: #6366f1;
  }
`;

const SearchNavIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  padding-right: 8px;
  color: #1f2937;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartNavIcon = styled(ShoppingCartIcon)`
  width: 24px;
  height: 24px;
  color: #1f2937;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: -2rem;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ hamburgerOpen }) => (hamburgerOpen ? "300px" : "0")};
    transition: max-height 0.2s ease-in;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
`;
