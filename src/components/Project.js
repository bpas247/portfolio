import React from "react";
import styled from "@emotion/styled";

const StyledProject = styled.div`
  color: ${props => props.theme.colors.text};
  background: black;
  width: 75%;
  margin: auto;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0 0 5px 15px;
`;

const Project = ({ name, maintainer, children }) => (
  <StyledProject>
    <h3>
      {name} | {maintainer ? "Maintainer" : "Contributor"}
    </h3>
    {children}
  </StyledProject>
);

Project.Summary = ({ children }) => <h4>{children}</h4>;

Project.Contributions = ({ children }) => <div>{children}</div>;

export default Project;
