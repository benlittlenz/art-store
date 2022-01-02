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
import { Products } from "../Products";
import { Spacer } from "../Spacer";

const featuredList = [
  {
    image: "/painting.png",
    title: "Wallowing Breeze",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: "$500.00",
  },
  {
    image: "/painting 2.png",
    title: "J Resistance",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: "$450.00",
  },
  {
    image: "/painting 4.png",
    title: "Warm Basket",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: "$420.00",
  },
  {
    image: "/painting 2.png",
    title: "The Vonnergut",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: "$380.00",
  },
];

export function FeaturedProducts({ products }) {

  return (
    <Wrapper>
      <HeadingWrapper>
        <h2>Featured Art</h2>
        {/* <Spacer /> */}
      </HeadingWrapper>
      <Products products={products}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

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
