import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { PostsProvider } from "./contexts/PostsContext";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsProvider>
    </ThemeProvider>
  )
};