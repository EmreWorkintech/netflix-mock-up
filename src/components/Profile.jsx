import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.6rem;
  border: 4px solid rgba(0, 0, 0, 0);
`;

const ProfileCard = styled.div`
  width: 180px;
  cursor: pointer;
  &:hover ${Avatar} {
    border: 4px solid white;
  }
  &:hover h2 {
    color: white;
  }
`;

const Name = styled.h2`
  text-align: center;
  color: darkgray;
  font-weight: 500;
`;

function Profile(props) {
  //hooklar
  const { item, setActiveProfile } = props;
  const history = useHistory();

  //helper
  function handleClick() {
    setActiveProfile(item);
    history.push("/browse");
  }
  //template
  return (
    <ProfileCard onClick={handleClick}>
      <Avatar src={item.avatar} />
      <Name>{item.name}</Name>
    </ProfileCard>
  );
}

export default Profile;
