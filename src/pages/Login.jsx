import React, { use, useState } from "react";
import styled from "styled-components";
import background from "../assets/images/AuthenticationPage.png";
import logo from "../assets/images/logo_sm.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
`;

const Header = styled.header`
  width: 80%;
  margin: auto;
  padding: 1.5rem 3rem 1.75rem;
`;

const Logo = styled.img`
  height: 40px;
`;

const Form = styled.form`
  width: 450px;
  background: rgba(0, 0, 0, 0.5);
  margin: auto;
  padding: 3rem 4.25rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 1.1rem 1rem;
  font-size: 0.9rem;
  color: darkgray;
  border: 1px solid darkgray;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  background: red;
  text-align: center;
  color: white;
  border-radius: 0.2rem;
  border: none;
  padding: 0.7rem;
  font-size: 0.9rem;
  cursor: pointer;

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const initialFormValues = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  //isValid kontrolü-useEffect(()=>{...}, [formData])

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    //validation controlleri
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/welcome");
    //axios
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} />
      </Header>
      <Form onSubmit={handleSubmit}>
        <Title>Sign In</Title>
        <Input
          name="email"
          type="email"
          placeholder="Email or phone number"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button disabled={!isValid}>Sign In</Button>
      </Form>
    </Container>
  );
}

export default Login;
