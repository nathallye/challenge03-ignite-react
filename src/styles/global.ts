import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: none;

    ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${props => props.theme["scrollbar"]};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 999px;
      background: ${props => props.theme["scrollbar"]};
    }
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme["base-border"]};
  }

  body {
    background: ${props => props.theme["base-background"]};
    color: ${props => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
