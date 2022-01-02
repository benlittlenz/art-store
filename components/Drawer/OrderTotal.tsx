import styled from "styled-components";
import Image from "next/image";
import { numberFormat } from "../../lib/format";

const OrderWrapper = styled.div`
  padding: 1.5rem 1rem;
  border: 1px solid #e5e7eb;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #111827;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
`;

const Shipping = styled.p`
  margin-top: 0.125rem;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const CheckoutWrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

const CheckoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;

const ContinueShopping = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;

  p > button {
    color: #4f46e5;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      color: #6366f1;
    }
  }
`;

export function OrderTotal() {
  return (
    <OrderWrapper>
      <PriceWrapper>
        <p>Subtotal</p>
        <p>{numberFormat.format(1000)}</p>
      </PriceWrapper>
      <Shipping>Shipping and GST calculated at checkout.</Shipping>
      <CheckoutWrapper>
        <CheckoutButton type="button">Checkout</CheckoutButton>
        <ContinueShopping>
          <p>
            or{" "}
            <button type="button">
              Continue Shopping<span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </ContinueShopping>
      </CheckoutWrapper>
    </OrderWrapper>
  );
}
