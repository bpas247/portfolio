import React from "react";
import styled from "styled-components";

const ShowcaseEntry = styled.div`
  background-color: white;
  text-align: left;
`;

const Showcase = ({ homepageUrl, name, description }) => {
  return (
    <>
      <ShowcaseEntry>
        <h2>
          <a href={homepageUrl}>{name}</a>
        </h2>
        <h3>{description}</h3>
      </ShowcaseEntry>
    </>
  );
};

export default Showcase;
