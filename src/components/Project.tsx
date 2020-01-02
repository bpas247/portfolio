import React from "react";
import styled from "@emotion/styled";

const StyledProject = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 50%;
  margin-bottom: 5%;
`;

const StyledName = styled.h3`
  align-self: center;
`;

const StyledSummary = styled.h4``;

interface ProjectProps {
  name: string;
  summary: string;
  maintainer?: boolean;
  children: React.ReactNode;
}

const Project = ({ name, summary, maintainer, children }: ProjectProps) => (
  <StyledProject>
    <StyledName>{name}</StyledName>
    <StyledSummary>{summary}</StyledSummary>
    <h5>{maintainer ? "Maintainer" : "Contributor"}</h5>
    {children}
  </StyledProject>
);

export default Project;
