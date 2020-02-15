import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

import "../styles/global.css";

const StyledPage = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42em;
  padding: 2em 1.5em;
`;

export default ({ children }) => (
  <StyledPage>
    <Navbar />
    <main>
      <article>{children}</article>
    </main>
  </StyledPage>
);
