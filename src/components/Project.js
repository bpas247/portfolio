import React from "react";

const Project = ({ name, maintainer, children }) => (
  <>
    {name}
    <br />
    {maintainer ? "Maintainer" : "Contributor"}
    <br />
    {children}
  </>
);

Project.Summary = ({ children }) => <div>{children}</div>;

Project.Contributions = ({ children }) => <div>{children}</div>;

export default Project;
