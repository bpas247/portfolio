import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
            <div key={i}>
              <h2>
                <a href={node.homepageUrl}>{node.name}</a>
              </h2>
              <h3>{node.description}</h3>
              <h4>stars: {node.stargazers.totalCount}</h4>
            </div>
          ))
        : "Loading..."}
    </>
  );
};

export default Showcase;
