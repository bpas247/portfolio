import React from "react";

const StyledProject = props => <div {...props} />;

const Project = ({ name, maintainer, children }) => (
  <StyledProject>
    <h3>
      {name} | {maintainer ? "Maintainer" : "Contributor"}
    </h3>
    {children}
  </StyledProject>
);

Project.Summary = ({ children }) => (
  <p>
    {children}
    <hr />
  </p>
);

Project.Contributions = ({ children }) => <p>{children}</p>;

export default Project;
