import React from "react";
import { Navbar, Grid } from "../";
import { ThemeProvider } from "emotion-theming";
import { Heading } from "rebass";
import theme from "./theme";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Grid>
      <Navbar />
      {children}
    </Grid>
  </ThemeProvider>
);

Layout.Title = props => (
  <Heading
    as="h1"
    {...props}
    textAlign="center"
    fontSize={[5, 6, 7]}
    color="text"
  />
);

Layout.Subtitle = props => (
  <Heading
    as="h2"
    {...props}
    textAlign="center"
    fontSize={[4, 5, 6]}
    color="text"
  />
);

export default Layout;
