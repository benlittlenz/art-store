import styled from "styled-components";

export function FeaturedProducts() {
  return (
    <ProductsWrapper>
      <Heading>
        Featured
      </Heading>
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  background-color: white;
  max-width: 42rem;

`;

const Heading = styled.h1`
  color: #161412;
  font-size: 2rem;
  letter-spacing: 0.75px;
  font-weight: 500;
`;
