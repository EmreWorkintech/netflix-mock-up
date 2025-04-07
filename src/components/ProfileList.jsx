import React from "react";
import { profiles } from "../data";
import Profile from "./Profile";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
`;
function ProfileList(props) {
  const { setActiveProfile } = props;

  return (
    <ProfileContainer>
      {profiles.map((item, index) => (
        <Profile item={item} key={index} setActiveProfile={setActiveProfile} />
      ))}
    </ProfileContainer>
  );
}

export default ProfileList;
