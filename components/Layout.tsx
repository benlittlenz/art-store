import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}

const MainWrapper = styled.main`
  flex: 1;
`;
