import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Products } from "../components/Products";
import { getProductsInCollection } from "../lib/shopify";

const ShopWrapper = styled.div`
  max-width: 80rem;
  margin: 2rem auto;
`;

const ShopPage = ({ products }) => {
  return (
    <ShopWrapper>
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
