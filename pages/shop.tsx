import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Products } from "../components/Products";
import { Spacer } from "../components/Spacer";
import { getProductsInCollection } from "../lib/shopify";

const ShopWrapper = styled.div`
  max-width: 80rem;
  margin: 2rem auto;
`;

const Heading = styled.h2`
  padding: 0 1.6rem;
  color: #1f2937;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  letter-spacing: -0.025em;

  @media (min-width: 640px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const ShopPage = ({ products }) => {
  return (
    <ShopWrapper>
      <Heading>Latest Work</Heading>
      <Spacer />
      <Products products={products} hoverable={false} />
    </ShopWrapper>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
