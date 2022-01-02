import styled from "styled-components";

import { AboutSection } from "../components/AboutSection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { SocialSection } from "../components/SocialSection";
import { Spacer } from "../components/Spacer";
import { Newsletter } from "../components/Newsletter";
import { Layout } from "../components/Layout";
import { getProductsInCollection } from "../lib/shopify";

const IndexPage = ({ products }) => {
  return (
    <>
      <AboutSection />
      <Spacer />
      <SocialSection />
      <Spacer />
      <FeaturedProducts products={products} />
      <Spacer />
      <Newsletter />
    </>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
