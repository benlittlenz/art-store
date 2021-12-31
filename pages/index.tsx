import styled from "styled-components";

import { AboutSection } from "../components/AboutSection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { SocialSection } from "../components/SocialSection";
import { Navbar } from "../components/Navbar";
import { Spacer } from "../components/Spacer";
import { Footer } from "../components/Footer";

const IndexPage = () => (
  <>
    <Navbar />
    <AboutSection />
    <Spacer />
    <SocialSection />
    <Spacer />
    <FeaturedProducts />
    <Footer />
  </>
);

export default IndexPage;

