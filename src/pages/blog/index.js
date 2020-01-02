import React from "react";
import { Layout } from "../../components";
import { graphql, Link } from "gatsby";

export default ({
  data: {
    allMdx: { edges }
  }
}) => (
  <Layout>
    Here is a list of my blog posts
    <br />
    {edges.map(({ node }, i) => (
      <Link key={i} to={node.frontmatter.path}>
        {node.frontmatter.title}
      </Link>
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
            description
            path
          }
        }
      }
    }
  }
`;
