import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/reducers/registerReducer";
import { useNavigate } from "react-router-dom";

function Register() {
  // States for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [secondName, setSecondName] = useState("");

  // Redux state
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle form submission
  const handleRegister = (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
      firstname: userName,
      lastname: secondName,
    };

    let jsonUserData = JSON.stringify(userData);
    console.log(jsonUserData);

    dispatch(registerUser(jsonUserData)).then((result) => {
      if (result) {
        navigate("/login");
        console.log(result);
      }
    });
  };

  return (
    <div>
      {" "}
      <Form onSubmit={(e) => handleRegister(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="userName"
          />
        </Form.Group>
        <Form.Group controlId="formBasicSecondName">
          <Form.Label>SecondName</Form.Label>
          <Form.Control
            type="SecondName"
            name="SecondName"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder="SecondName"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleRegister(e)}
        >
          {loading ? "Loading..." : "Register"}
        </Button>
        {error && <div className="alert alert-danger" role="alert"></div>}
        {error}
      </Form>
    </div>
  );
}

export default Register;
