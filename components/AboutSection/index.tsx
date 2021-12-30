import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

import { Button } from "../Button";
import { Spacer } from "../Spacer";

export function AboutSection() {
  return (
    <SectionWrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Waterfall&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AboutWrapper>
        <ArtistWrapper>
          <h2>Elizabeth Anne</h2>
          <h3>Visual Artist & Gallerist</h3>
          <p>Auckland, New Zealand</p>
        </ArtistWrapper>
        <SocialWrapper>
          <Button fontSize="1.25rem">
            <Image src="/facebook.svg" width={20} height={20} />
            <span>Facebook</span>
          </Button>
          <Button fontSize="1.25rem">
            <Image src="/facebook.svg" width={20} height={20} />
            <span>Instagram</span>
          </Button>
        </SocialWrapper>
      </AboutWrapper>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  // background-color: #f9fafb;
  display: flex;
  justify-content: center;
`;

const AboutWrapper = styled.div`
  //  max-width: 80rem;
  /* width: 100%;
  margin: 0 auto; */
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ArtistWrapper = styled.div`
  text-align: center;
  padding-bottom: 1rem;
  h2 {
    font-size: 4rem;
    font-weight: 500;
    font-family: "Waterfall", cursive;
    padding: 1rem 0;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    padding-bottom: 0.5rem;
  }
  p {
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
