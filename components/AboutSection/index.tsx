import styled from "styled-components";
import Head from "next/head";

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
