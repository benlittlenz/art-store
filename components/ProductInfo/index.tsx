import styled from "styled-components";
import { Drawer } from "../Drawer";
import { GallerySection } from "./Gallery";
import { InfoSection } from "./Info";


export function ProductInfo({ product }) {
  const { title, description, images, id } = product;
  return (
    <ProductInfoWrapper>
      <SectionWrapper>
        <GallerySection images={images.edges} />
      </SectionWrapper>

      <InfoSection product={product} />
      <Drawer open />
    </ProductInfoWrapper>
  );
}

const ProductInfoWrapper = styled.div`
  margin-bottom: 3rem;
  @media (min-width: 1024px) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2rem;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
`;
