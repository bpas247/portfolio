import React from "react";
import { Layout, Project } from "../components";

export default () => (
  <Layout>
    <Layout.Title>Projects</Layout.Title>
    <Layout.Subtitle>
      This is a brief list of projects I maintain or contribute to.
    </Layout.Subtitle>
    <Project name="React Bootstrap" maintainer>
      <Project.Summary>
        React Bootstrap is a complete re-implementation of Bootstrap components,
        built with React. This also removes jQuery as a dependency.
      </Project.Summary>
      <Project.Contributions>
        I have worked on everything from CI tooling to component features. Some
        of my notable work are:
        <ul>
          <li>
            Submitted various PR reviews to improve docs and API consistency.
          </li>
          <li>Added Accordion component.</li>
          <li>Added Accordion-based react hooks.</li>
          <li>
            Migrated all doc examples to be function components (with hooks!).
          </li>
          <li>
            Improved consistency of the API by migrating components to properly
            forward their refs.
          </li>
        </ul>
      </Project.Contributions>
    </Project>
    <Project name="React Overlays" maintainer>
      <Project.Summary>
        React Overlays is a utility library for creating robust overlay
        components (used internally by React Bootstrap)
      </Project.Summary>
      <Project.Contributions>
        Most of my work has been focused on migrating our CI tooling from
        TravisCI and AppVeyorCI to GitHub Actions. I have also taken
        responsibility for the new redesign of our website, which is currently
        in the works.
      </Project.Contributions>
    </Project>
    <Project name="React Bootstrap CodeSandbox Examples" maintainer>
      <Project.Summary>
        The CodeSandbox examples repository houses all of React Bootstrap's
        CodeSandbox examples.
      </Project.Summary>
      <Project.Contributions>
        I have helped to create the structure of the repository, as well as a
        few basic examples to kickstart the project.
      </Project.Contributions>
    </Project>
    <Project name="Reactstrap">
      <Project.Summary>
        Reactstrap is another React-based Bootstrap library with a different
        approach to its API.
      </Project.Summary>
      <Project.Contributions>
        My most notable contribution was the migration of all of the docs
        examples from class to function components (with hooks!)
      </Project.Contributions>
    </Project>
    <Project name="Material-UI">
      <Project.Summary>
        Material-UI is a React-based UI library, based on Material Design.
      </Project.Summary>
      <Project.Contributions>
        My most notable contribution to this library is (you guessed it)
        migrating the remaining docs examples from class to function components
        (with hooks!).
      </Project.Contributions>
    </Project>
  </Layout>
);
