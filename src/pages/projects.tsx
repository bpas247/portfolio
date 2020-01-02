import React from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";

export default () => (
  <Layout>
    <Layout.Title>Projects</Layout.Title>
    <Layout.Subtitle>
      This is a brief list of projects I maintain or contribute to.
    </Layout.Subtitle>
    <Project
      name="React Bootstrap"
      summary="React Bootstrap is a complete re-implementation of Bootstrap components,
    built with React."
      maintainer
    >
      I have worked on everything from CI tooling to component features. Some of
      my notable work are:
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
    </Project>
    <Project
      name="React Overlays"
      summary="React Overlays is a utility library for creating robust overlay
    components (used internally by React Bootstrap)"
      maintainer
    >
      Most of my work has been focused on migrating our CI tooling from TravisCI
      and AppVeyorCI to GitHub Actions. I have also taken responsibility for the
      new redesign of our website, which is currently in the works.
    </Project>
    <Project
      name="React Bootstrap CodeSandbox Examples"
      summary="The CodeSandbox examples repository houses all of React Bootstrap's
        CodeSandbox examples."
      maintainer
    >
      I have helped to create the structure of the repository, as well as a few
      basic examples to kickstart the project.
    </Project>
    <Project
      name="Reactstrap"
      summary="Reactstrap is another React-based Bootstrap library with a different
        approach to its API."
    >
      My most notable contribution was the migration of all of the docs examples
      from class to function components (with hooks!)
    </Project>
    <Project
      name="Material-UI"
      summary="Material-UI is a React-based UI library, based on Material Design."
    >
      My most notable contribution to this library is (you guessed it) migrating
      the remaining docs examples from class to function components (with
      hooks!).
    </Project>
  </Layout>
);
