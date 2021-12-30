import Image from "next/image";
import styled from "styled-components";
import {
  CardWrapper,
  ImageContainer,
  CardInfoHeader,
  CardInfoDescription,
  CardPriceWrapper,
  CardCheckout,
} from "../Card";
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

export function FeaturedProducts() {
  return (
    <Wrapper>
      <HeadingWrapper>
        <h1>Featured Art</h1>
        <Spacer />
      </HeadingWrapper>

      <ProductsWrapper>
        {featuredList.map((feature, index) => (
          <CardWrapper key={index}>
            <ImageContainer>
              <Image
                src={feature.image}
                layout="fixed"
                width={300}
                height={300}
              />
            </ImageContainer>
            <div>
              <CardInfoHeader>{feature.title}</CardInfoHeader>
              <CardInfoDescription>{feature.description}</CardInfoDescription>
              <CardPriceWrapper>
                <span>{feature.price}</span>
                <CardCheckout />
              </CardPriceWrapper>
            </div>
          </CardWrapper>
        ))}
      </ProductsWrapper>
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
  h1 {
    color: #161412;
    font-size: 2rem;
    letter-spacing: 0.75px;
    font-weight: 500;
  }
`;
