import React from "react";
import { Box, Heading, Text, Card } from "rebass";

const StyledProject = props => <Card {...props} width={3 / 4} />;

const Project = ({ name, maintainer, children }) => (
  <StyledProject>
    <Heading color="text" as="h3" fontSize={[3, 4, 5]}>
      {name} | {maintainer ? "Maintainer" : "Contributor"}
    </Heading>
    {children}
  </StyledProject>
);

Project.Summary = ({ children }) => (
  <Text color="text" fontSize={[2, 3, 4]}>
    {children}
    <hr />
  </Text>
);

Project.Contributions = ({ children }) => (
  <Text color="text" fontSize={[2, 3, 4]}>
    {children}
  </Text>
);

export default Project;
