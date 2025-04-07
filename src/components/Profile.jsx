import React from "react";
import styled from "styled-components";

const ProfileCard = styled.div`
  width: 180px;
  cursor: pointer;
  &:hover img {
    border: 4px solid white;
  }
  &:hover h2 {
    color: white;
  }
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.6rem;
  border: 4px solid rgba(0, 0, 0, 0);
`;
const Name = styled.h2`
  text-align: center;
  color: darkgray;
  font-weight: 500;
`;

function Profile(props) {
  const { item } = props;

  return (
    <ProfileCard>
      <Avatar src={item.avatar} />
      <Name>{item.name}</Name>
    </ProfileCard>
  );
}

export default Profile;
