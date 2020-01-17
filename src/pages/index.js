import React from "react";
import { Layout } from "../components";
import { graphql } from "gatsby";
import Card from "../components/Card";
import styled from "@emotion/styled";

const StyledList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default ({
  data: {
    allImageSharp: { edges: images },
    allMdx: { edges: content }
  }
}) => (
  <Layout>
    <h1>Welcome To My Website</h1>
    <p>
      I am Brady Pascoe, an experienced mentor and developer who likes to build
      dope web apps and contribute to open-sourced software.
    </p>
    <h2>Here is a list of my blog posts</h2>
    <StyledList>
      {content.map(({ node }, i) => {
        const { title, date, description, path, image } = node.frontmatter;
        const imageFound = images.find(
          img => img.node.fluid.originalName === image
        );
        return (
          <Card
            key={i}
            title={title}
            date={date}
            path={path}
            img={imageFound.node.fluid}
          >
            {description}
          </Card>
        );
      })}
    </StyledList>
  </Layout>
);

export const pageQuery = graphql`
  {
    allImageSharp {
      edges {
        node {
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            description
            path
            image
          }
        }
      }
    }
  }
`;
