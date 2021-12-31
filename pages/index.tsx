import styled from "styled-components";

import { AboutSection } from "../components/AboutSection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { SocialSection } from "../components/SocialSection";
import { Spacer } from "../components/Spacer";
import { Newsletter } from "../components/Newsletter";
import { Layout } from "../components/Layout";

const IndexPage = () => (
  <>
    <Layout>
      <AboutSection />
      <Spacer />
      <SocialSection />
      <Spacer />
      <FeaturedProducts />
      <Spacer />
      <Newsletter />
    </Layout>
  </>
);

export default IndexPage;

