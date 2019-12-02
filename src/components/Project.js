/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading, Text, Card } from "@theme-ui/components";

const StyledProject = props => <Card {...props} />;

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
