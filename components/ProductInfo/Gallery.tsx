import { useState } from "react"
import Image from "next/image";
import styled, { css } from "styled-components";

const productImages = [
  {
    id: 1,
    name: "Wallowing Breeze 1",
    src: "/painting.png",
    alt: "Wallowing Breeze 1",
  },
  {
    id: 2,
    name: "Wallowing Breeze 2",
    src: "/Painting 2.png",
    alt: "Wallowing Breeze 2",
  },
  {
    id: 3,
    name: "Wallowing Breeze 3",
    src: "/Painting 4.png",
    alt: "Wallowing Breeze 3",
  },
];

export function GallerySection() {
  const [active, setActive] = useState(0);
  return (
    <GalleryWrapper>
      <MainImage>
        <Image src={productImages[active].src} layout="fill" />
      </MainImage>
      <TabGroup>
        <ImageSelector>
          <TabList>
            {productImages.map((image, index) => (
              <Tab
                key={index}
                onClick={() => setActive(index)}
                isActive={index === active}
              >
                <Image
                  src={image.src}
                  width="100%"
                  height="100%"
                  // layout="responsive"
                  objectFit="cover"
                />
              </Tab>
            ))}
          </TabList>
        </ImageSelector>
      </TabGroup>
    </GalleryWrapper>
  );
}

const GalleryWrapper = styled.div`
  margin: 0 auto;
  padding: 4rem 0;
`;

const MainImage = styled.div`
  position: relative;
  width: 25rem;
  height: 30rem;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.375rem;
  margin-bottom: 1.2rem;
  box-shadow: #9ca3af 0px 20px 30px;
`;

const TabGroup = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const ImageSelector = styled.div`
  display: none;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 42rem;

  @media (min-width: 640px) {
    display: block;
  }

  @media (min-width: 1024px) {
    max-width: none;
  }
`;

const TabList = styled.ul`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  gap: 2rem;
  padding: 20px 0;
`;

const Tab = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-radius: 0.375rem;
  cursor: pointer;
  box-shadow: ${(props) => (props.isActive ? "#1f2937 0px 12px 30px" : "0")};
  transform: ${(props) => (props.isActive ? "scale(1.05)" : "scale(1)")};
`;
