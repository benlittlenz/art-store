import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

import { Button } from "../Button";
import { Spacer } from "../Spacer";

export function SocialSection() {
  return (
    <Wrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Waterfall&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SocialWrapper>
        <SocialTextWrapper>
          <h2>Social Media</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </SocialTextWrapper>
        <SocialButtonsWrapper>
          <Button fontSize="1.25rem" width="16rem">
            <Image src="/facebook.svg" width={20} height={20} />
            <span>Facebook</span>
          </Button>
          <Button fontSize="1.25rem" width="16rem">
            <Image src="/instagram.svg" width={20} height={20} />
            <span>Instagram</span>
          </Button>
        </SocialButtonsWrapper>
      </SocialWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f3f4f6;
  padding: 2.8rem 0;
  overflow: hidden;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.7rem;
`;

const SocialTextWrapper = styled.div`
  h2 {
    font-size: 4rem;
    font-weight: 500;
    font-family: "Waterfall", cursive;
    padding: 1rem 0;
  }

  p {
    width: 70%;
    font-size: 1rem;
    font-weight: 400;
  }
`;

const SocialButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 0.875rem;
  margin-bottom: 2rem;
`;
