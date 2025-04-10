import styled from "styled-components";
import video from "../assets/videos/house_of_ninjas.mp4";

const VideoPlayer = styled.video`
  width: 100%;
  aspect-ratio: 16/9;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 600px) {
    position: relative;
  }
`;

function Video() {
  return (
    <VideoPlayer muted autoPlay loop>
      <source src={video} type="video/mp4" />
    </VideoPlayer>
  );
}

export default Video;
