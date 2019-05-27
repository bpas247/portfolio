import React from "react";
import styled from "styled-components";

const BackgroundLines = styled.div`
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
`;

const Background = () => (
  <>
    <BackgroundLines />
    <BackgroundLines
      style={{
        animationDirection: "alternate-reverse",
        animationDuration: "4s"
      }}
    />
    <BackgroundLines
      style={{
        animationDuration: "5s"
      }}
    />
  </>
);

export default Background;
