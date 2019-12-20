import React from "react";
import styled from "@emotion/styled";

const Project = ({ name, maintainer, children }) => (
  <>
    <h3>
      {name} | {maintainer ? "Maintainer" : "Contributor"}
    </h3>
    {children}
  </>
);

Project.Summary = ({ children }) => <p>{children}</p>;

Project.Contributions = styled.div`
  padding-bottom: 5%;
`;

export default Project;
