/** @jsx jsx */
import {
  jsx,
  Layout as BaseLayout,
  Header,
  Main,
  ThemeProvider
} from "theme-ui";
import { Heading, Container } from "@theme-ui/components";
import { Navbar } from "../";
import theme from "../../gatsby-plugin-theme-ui";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <BaseLayout>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </BaseLayout>
  </ThemeProvider>
);

Layout.Title = props => (
  <Heading
    as="h1"
    {...props}
    sx={{
      textAlign: "center",
      fontSize: [5, 6, 7],
      color: "text"
    }}
  />
);

Layout.Subtitle = props => (
  <Heading
    as="h2"
    {...props}
    sx={{
      textAlign: "center",
      fontSize: [4, 5, 6],
      color: "text"
    }}
  />
);

export default Layout;
