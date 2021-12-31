import styled from "styled-components";
import { Button } from "../Button";

export function Newsletter() {
  return (
    <NewsletterWrapper>
      <Text>
        <h2>Want news and updates from me?</h2>

        <p>Sign up for our newsletter to stay up to date.</p>
      </Text>
      <FormWrapper>
        <Form>
          <SrOnlyLabel htmlFor="email-address">Email address</SrOnlyLabel>
          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Enter your email"
          />

          <SubscribeBtn type="Submit">Subscribe</SubscribeBtn>
        </Form>
      </FormWrapper>
    </NewsletterWrapper>
  );
}

const NewsletterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6rem auto;
  max-width: 60rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  @media (min-width: 1280px) {
    flex: 1 1 0%;
    width: 0;
  }

  h2 {
    color: #1f2937;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: -0.025em;

    @media (min-width: 640px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }

  p {
    margin-top: 0.75rem;
    color: #6b7280;
    font-size: 1.125rem;
    line-height: 1.75rem;
    max-width: 48rem;
  }
`;

const FormWrapper = styled.div`
  margin-top: 2rem;

  @media (min-width: 640px) {
    width: 100%;
    max-width: 28rem;
  }

  @media (min-width: 1280px) {
    margin-top: 0;
    margin-left: 2rem;
  }
`;

const Form = styled.form`
  margin-top: 2rem;

  @media (min-width: 640px) {
    display: flex;
  }
`;

const Input = styled.input`
  padding: 0.75rem 0.875rem;
  color: #6b7280;
  width: 14rem;
  max-width: 18rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  margin-right: 0.875rem;

  @media (min-width: 640px) {
    max-width: 20rem;
  }
`;

const SubscribeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  max-width: 10rem;
  padding: 0.5rem 1.25rem;
  background-color: #818cf8;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #6366f1;
  }
`;


const SrOnlyLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
