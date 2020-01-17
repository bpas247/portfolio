import React from "react";
import { Navbar } from "./";
import styled from "@emotion/styled";

import "../styles/global.css";

const StyledPage = styled.div``;

const StyledLayout = styled.div`
  margin: 2em;
`;

export default ({ children }) => (
  <StyledPage>
    <Navbar />
    <StyledLayout>{children}</StyledLayout>
  </StyledPage>
);
