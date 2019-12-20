import React from "react";
import { Navbar } from "./";
import styled from "@emotion/styled";

const StyledLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Section = styled.div`
  margin: auto;
  padding-left: 5%;
`;

const Layout = ({ children }) => (
  <>
    <Navbar />
    <StyledLayout>
      <Section>{children}</Section>
    </StyledLayout>
  </>
);

Layout.Title = styled.h1`
  text-align: center;
  margin: auto;
`;

Layout.Subtitle = styled.h2`
  text-align: center;
`;

export default Layout;
