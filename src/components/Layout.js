import React from "react";
import { Navbar } from "./";
import styled from "@emotion/styled";

import "../styles/global.css";

const StyledLayout = styled.div`
  color: #2c363f;
  display: flex;
  flex-flow: column wrap;
  padding-left: 25%;
  padding-right: 25%;
`;

const Layout = ({ children }) => (
  <>
    <Navbar />
    <StyledLayout>{children}</StyledLayout>
  </>
);

Layout.Title = styled.h1`
  align-self: center;
`;

Layout.Subtitle = styled.h2`
  margin-bottom: 5%;
`;

export default Layout;
