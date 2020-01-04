import React from "react";
import styled from "@emotion/styled";

const StyledProject = styled.div`
  margin-bottom: 5%;
  max-width: 600px;
`;

const StyledName = styled.h3`
  text-align: center;
`;

const StyledSummary = styled.h4``;

const Project = ({ name, summary, maintainer, children }) => (
  <StyledProject>
    <StyledName>{name}</StyledName>
    <StyledSummary>{summary}</StyledSummary>
    <h5>{maintainer ? "Maintainer" : "Contributor"}</h5>
    {children}
  </StyledProject>
);

export default Project;
