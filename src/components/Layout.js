import React from "react";
import { Navbar } from "./";
import styled from "@emotion/styled";

import "../styles/global.css";

const StyledLayout = styled.div`
  color: #000100;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Layout = ({ children }) => (
  <>
    <Navbar />
    <StyledLayout>{children}</StyledLayout>
  </>
);

Layout.Title = styled.h1``;

Layout.Subtitle = styled.h2`
  margin-bottom: 5%;
`;

export default Layout;
