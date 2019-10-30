import React from "react";
import { Navbar } from "./";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    text: "white"
  }
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Navbar />
    {children}
  </ThemeProvider>
);

Layout.Title = styled.h1`
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

Layout.Subtitle = styled.h2`
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

export default Layout;
