import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  border: 0.1875rem solid #222;
  border-radius: 4px;
  margin: 0 1em;
  padding: 0.50em 1.5em;
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
`;

