import styled from "styled-components"
import { ShoppingCartIcon } from "@heroicons/react/outline";

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 20rem;
  border-radius: 0.375rem;
  overflow: hidden;

  @media (min-width: 1024px) {
    height: 20rem;
  }
`;

export const CardInfoHeader = styled.h3`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #374151;
  cursor: pointer;
`;

export const CardInfoDescription = styled.p`
  margin-top: 4px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #6b7280;
`;

export const CardPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  visibility: hidden;

  span {
    font-size: 1.2rem;
    line-height: 1.15rem;
    color: #374151;
    font-weight: 600;
  }
`;

export const CardCheckout = styled(ShoppingCartIcon)`
  width: 30px;
  height: 30px;
  padding: 6px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  background-color: black;
  border-radius: 4px;
`;

export const CardWrapper = styled.div`
  padding: 2rem 1.5rem;
  overflow: hidden;
  width: 300px;
  max-width: 42rem;
  border-radius: 5px;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  &:hover {
    ${CardPriceWrapper} {
      visibility: visible;
      margin-top: 20px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 80rem;
  }
`;
