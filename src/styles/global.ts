import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.yellow[900]}
  }

  body {
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.lg};
    line-height: 130%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 130%;
    font-weight: 700;
    font-family: 'Baloo 2', cursive;
    font-size: ${(props) => props.theme.sizes.xl};
  }
`;
