import styled from "styled-components";
import Image from "next/image";

const ProductList = styled.ul`
  margin-top: -1.2rem;
  margin-bottom: -1.5rem;
  border-top-width: 1px;
  border-color: #e5e7eb;
`;

const Product = styled.li`
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e7eb;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  width: 6rem;
  height: 6rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  padding: 5px;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  margin-left: 1rem;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #111827;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;

  h3 {
    color: #111827;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
  }

  p {
    margin-left: 1rem;
  }
`;

const ProductVariant = styled.p`
  margin-top: 0.25rem;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1 1 0%;
  font-size: 0.875rem;
  line-height: 1.25rem;

  p {
    color: #6b7280;
  }
`;

const RemoveWrapper = styled.div`
  display: flex;
  button {
    background: none;
    border: none;
    color: #4f46e5;
    font-weight: 500;
    cursor: pointer;
  }
`;

export function ProductCart() {
  return (
    <ProductList role="list">
      <Product>
        <ImageWrapper>
          <Image src="/painting.png" width={100} height={100} />
        </ImageWrapper>
        <ProductInfoWrapper>
          <div>
            <ProductInfo>
              <h3>The Vonnergut</h3>
              <p>$500.00</p>
            </ProductInfo>
            <ProductVariant>600mm x 400mm</ProductVariant>
          </div>
          <QuantityWrapper>
            <p>Qty 5</p>

            <RemoveWrapper>
              <button type="button">Remove</button>
            </RemoveWrapper>
          </QuantityWrapper>
        </ProductInfoWrapper>
      </Product>
    </ProductList>
  );
}
