import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 12rem;
  max-width: 21rem;
  background: transparent;
  border: 0.1875rem solid #111827;
  border-radius: 4px;
  margin: 0 1em;
  padding: 0.5em 2em;
  cursor: pointer;

  span {
    text-transform: uppercase;
    font-weight: 400;
    color: #6b7280;
    ${(props) =>
      props.fontSize
        ? css`
            font-size: ${props.fontSize};
          `
        : ""};
  }

  &:hover {
    border: 0.1875rem solid #4b5563;
  }
`;
