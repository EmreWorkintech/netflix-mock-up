import React from "react";
import styled from "styled-components";
import ProfileList from "../components/ProfileList";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid darkgray;
  color: darkgray;
  background: none;
  font-size: 1rem;
`;

function Welcome(props) {
  const { setActiveProfile } = props;
  return (
    <Container>
      <Title>Who's watching?</Title>
      <ProfileList setActiveProfile={setActiveProfile} />
      <Button>Manage Profiles</Button>
    </Container>
  );
}

export default Welcome;
