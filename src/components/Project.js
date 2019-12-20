import React from "react";
import styled from "@emotion/styled";

const StyledProject = styled.div``;

const StyledName = styled.h3`
  width: 95%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const StyledPosition = styled.span``;

const Project = ({ name, maintainer, children }) => (
  <StyledProject>
    <StyledName>
      {name}{" "}
      <StyledPosition>
        {maintainer ? "Maintainer" : "Contributor"}
      </StyledPosition>
    </StyledName>
    {children}
  </StyledProject>
);

Project.Summary = ({ children }) => <p>{children}</p>;

Project.Contributions = styled.div`
  margin-bottom: 5%;
`;

export default Project;
