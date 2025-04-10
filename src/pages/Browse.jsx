import React from "react";
import Video from "../components/Video";
import houseOfNinjas from "../assets/videos/house_of_ninjas.mp4";
import styled from "styled-components";
import Header from "../components/Header";

const Hero = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
  display: flex;
  align-items: center;
  padding: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const VideoDetails = styled.div`
  color: white;
  font-size: 3rem;
  z-index: 100;
`;

function Browse(props) {
  //const { activeProfile } = props;
  return (
    <>
      <Header />
      <Hero>
        <Video />
        <VideoDetails>
          House of
          <br />
          Ninjas
        </VideoDetails>
      </Hero>
    </>
  );
}

export default Browse;
