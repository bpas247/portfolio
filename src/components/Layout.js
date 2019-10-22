import React from "react";
import { Navbar } from "./";
import styled from "@emotion/styled";

const StyledLayout = styled.div`
  color: white;
`;

export default ({ children }) => (
  <StyledLayout>
    <Navbar />
    {children}
  </StyledLayout>
);
