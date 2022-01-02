import { useContext } from "react";
import styled from "styled-components";
import { LocationMarkerIcon, TruckIcon } from "@heroicons/react/outline";

import { Button } from "../Button";
import { Spacer } from "../Spacer";
import { CartContext } from "../../context/shopContext";

export function InfoSection({ product }) {
  const { addToCart } = useContext(CartContext);
  console.log("product", product)
  return (
    <ProductInfoWrapper>
      <main>
        <ProductHeading>{product.title}</ProductHeading>
        <DescriptionWrapper>
          <Dimensions>
            <li>Oil on canvas</li>
            <li>Gallery wrap canvas</li>
            <li>600mm x 400mm</li>
          </Dimensions>
          <Description>{product.description}</Description>
        </DescriptionWrapper>
        <Spacer />
        <ProductPrice>$500.00</ProductPrice>
        <ShippingDetails>
          <div>
            <LocationIcon />
            <p>Ships from Auckland, New Zealand</p>
          </div>

          <div>
            <Truck />
            <p>Estimated delivery 3-7 days within New Zealand</p>
          </div>
        </ShippingDetails>
        <AddCart type="button" onClick={() => addToCart({
          id: product.variants.edges[0].node.id,
          handle: product.handle,
          title: product.title,
          description: product.description,
          variantQuantity: 1
        })}>Add To Cart</AddCart>
      </main>
    </ProductInfoWrapper>
  );
}

const ProductInfoWrapper = styled.div`
  padding: 0 1rem;
  margin: 2.5rem 0;

  main {
    //  width: 50rem;
    max-width: 80rem;
    margin: 0 auto;

    @media (min-width: 640px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 4rem;
    }

    @media (min-width: 1024px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  @media (min-width: 640px) {
    padding-left: 0;
    padding-right: 0;
    margin-top: 4rem;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const ProductHeading = styled.h1`
  color: #1f2937;
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;

const ProductPrice = styled.div`
  color: #1f2937;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: -0.025em;
`;

const DescriptionWrapper = styled.div`
  margin-top: 1rem;
`;

const Description = styled.p`
  margin-top: 1.5rem;
  color: #374151;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Dimensions = styled.ul`
  margin-top: 1.5rem;
  color: #374151;
  font-size: 1rem;
  line-height: 1.5rem;
  list-style: none;
`;

const ShippingDetails = styled.div`
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    padding: 0.25rem 0;
  }
`;

const LocationIcon = styled(LocationMarkerIcon)`
  width: 20px;
  height: 20px;
  color: #1f2937;
  margin-right: 4px;
`;

const Truck = styled(TruckIcon)`
  width: 20px;
  height: 20px;
  color: #1f2937;
  margin-right: 4px;
`;

const AddCart = styled.button`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1.25rem;
  background-color: #6366f1;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #4f46e5;
  }
`;
