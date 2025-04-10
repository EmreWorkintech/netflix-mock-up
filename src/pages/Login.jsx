import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "../assets/images/AuthenticationPage.png";
import logo from "../assets/images/logo_sm.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  color: white;
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
  //hooklar
  const [formData, setFormData] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  //isValid kontrolü-useEffect(()=>{...}, [formData])
  useEffect(() => {
    if (validateEmail(formData.email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  //helper functionlar
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name == "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, ["email"]: "" });
      } else {
        setErrors({ ...errors, ["email"]: "Geçerli email adresi giriniz" });
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        console.log(res.data);
        history.push("/welcome");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  //template JSX
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
          data-cy="email-input"
        />
        <p>{errors.email}</p>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          data-cy="pass-input"
        />
        <Button disabled={!isValid} data-cy="submit-button">
          Sign In
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
