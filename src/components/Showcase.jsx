import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const ShowcaseEntry = styled.div`
  background-color: white;
  text-align: left;
`;

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositoriesContributedTo(first: 5) {
            nodes {
              name
              homepageUrl
              description
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data
        ? data.github.viewer.repositoriesContributedTo.nodes.map((node, i) => (
            <ShowcaseEntry key={i}>
              <h2 style={{ display: "inline" }}>
                <a href={node.homepageUrl}>{node.name}</a>
              </h2>
              <h3 style={{ display: "inline" }}>{node.description}</h3>
              <h4>stars: {node.stargazers.totalCount}</h4>
            </ShowcaseEntry>
          ))
        : "Loading..."}
    </>
  );
};

export default Showcase;
