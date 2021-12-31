import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${(props) =>
    props.width
      ? css`
          width: ${props.width};
        `
      : ""};
  max-width: 21rem;
  background: transparent;
  border: 0.1875rem solid #111827;
  border-radius: 4px;
  margin: 0 1em;
  padding: 0.5em 1.5em;
  cursor: pointer;

  span {
    text-transform: uppercase;
    font-weight: 400;
    color: #6b7280;
    margin-left: 8px;
    ${(props) =>
      props.fontSize
        ? css`
            font-size: ${props.fontSize};
          `
        : ""};
  }

  &:hover {
    border: 0.1875rem solid #4b5563;

    span {
      font-weight: 500;
    }
  }
`;
