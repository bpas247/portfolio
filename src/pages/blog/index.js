import React from "react";
import { Layout } from "../../components";
import { graphql } from "gatsby";

export default ({
  data: {
    allMdx: { edges }
  }
}) => (
  <Layout>
    Here is a list of my blog posts
    <br />
    {/* {JSON.stringify(data)} */}
    {edges.map(({ node }, i) => (
      <>{node.frontmatter.title}</>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
