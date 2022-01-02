import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { numberFormat } from "../../lib/format";
import {
  CardWrapper,
  ImageContainer,
  CardInfoHeader,
  CardInfoDescription,
  CardPriceWrapper,
  CardCheckout,
} from "../Card";

export function Products({ products, hoverable = true }) {
  return (
    <ProductsWrapper>
      {products.map(({ node }, index) => (
        <CardWrapper key={index} hoverable={hoverable}>
          <ImageContainer>
            <Image
              src={node.images.edges[0].node.originalSrc}
              layout="fixed"
              width={300}
              height={300}
            />
          </ImageContainer>
          <div>
            <Link href={`products/${node.handle}`}>
              <CardInfoHeader>{node.title}</CardInfoHeader>
            </Link>

            <CardInfoDescription>{node.description}</CardInfoDescription>
            <CardPriceWrapper hoverable={hoverable}>
              <span>
                {numberFormat.format(node.priceRange.minVariantPrice.amount) ||
                  ""}
              </span>
              <CardCheckout />
            </CardPriceWrapper>
          </div>
        </CardWrapper>
      ))}
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  display: grid;
  margin-top: 1.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 5rem;
  row-gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    column-gap: 2rem;
  }
  background-color: white;

  @media (max-width: 768px) {
    max-width: 42rem;
  }
`;

const HeadingWrapper = styled.div`
  padding: 0 1.6rem;
  h2 {
    color: #1f2937;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: -0.025em;

    @media (min-width: 640px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }
`;
