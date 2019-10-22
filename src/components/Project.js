import React from "react";
import styled from "@emotion/styled";

const StyledProject = styled.div``;

const Project = ({ name, maintainer, children }) => (
  <StyledProject>
    {name}
    <br />
    {maintainer ? "Maintainer" : "Contributor"}
    <br />
    {children}
  </StyledProject>
);

Project.Summary = ({ children }) => <div>{children}</div>;

Project.Contributions = ({ children }) => <div>{children}</div>;

export default Project;
