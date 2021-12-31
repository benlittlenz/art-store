import styled from "styled-components";
import Image from "next/image";
import { Spacer } from "../Spacer";

import { social } from "./icons"

export function Footer() {
  return (
    <FooterWrapper>
      <Logo href="">
        <Image src="/eam-logo.png" width={141} height={115} />
      </Logo>
      <Nav>
        <Menu>
          <NavLink href="">Home</NavLink>
          <NavLink href="">Shop</NavLink>
          <NavLink href="">About</NavLink>
          <NavLink href="">Contact</NavLink>
        </Menu>
      </Nav>
      <SocialNavWrapper>
        {social.map((item) => (
          <a key={item.name} href={item.href}>
            <SocialSrText>{item.name}</SocialSrText>
            <SocialIcon>
              <item.icon aria-hidden="true" />
            </SocialIcon>
          </a>
        ))}
      </SocialNavWrapper>
      <Copyright>&copy; 2022 Elizabeth Anne, Inc. All rights reserved.</Copyright>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  /* position: absolute;
  bottom: 0; */
  width: 100%;
  overflow: hidden;
  padding-bottom: 4rem;
  background-color: #f3f4f6;
`;


const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -0.5rem -1.25rem;
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
  }
`;

const NavLink = styled.a`
  padding: 1rem 1.7rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.75px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  color: #1f2937;
  transition: all 0.3s ease-in;

  &:hover {
    color: #111827;
  }
`;

const SocialNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-left: 1.5rem;

  a {
    color: #9ca3af;

    &:hover {
      color: #6b7280;
    }
  }
`;

const SocialSrText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const SocialIcon = styled.span`
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
`;

const Copyright = styled.p`
  margin-top: 2rem;
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
`;
