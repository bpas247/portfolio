import React from "react";
import { Navbar } from "./";
import styled from "@emotion/styled";

import "../styles/global.css";

const StyledLayout = styled.div`
  color: #2c363f;
  margin: 2em;
`;

export default ({ children }) => (
  <>
    <Navbar />
    <StyledLayout>{children}</StyledLayout>
  </>
);
