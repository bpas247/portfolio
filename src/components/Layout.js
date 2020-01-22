import React from "react";
import { Navbar } from "./";
import styled from "@emotion/styled";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "../styles/global.css";

library.add(faBars, faTimesCircle);

const StyledPage = styled.div``;

const StyledLayout = styled.div`
  margin: 10vh 15vw;
`;

export default ({ children }) => (
  <StyledPage>
    <Navbar />
    <StyledLayout>{children}</StyledLayout>
  </StyledPage>
);
