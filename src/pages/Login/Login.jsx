import "./Login.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/reducers/userReducer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //redux state
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };

    let jsonUserCredentials = JSON.stringify(userCredentials);
    console.log(jsonUserCredentials);

    dispatch(loginUser(jsonUserCredentials)).then((result) => {
      if (result.type === "user/loginUser/fulfilled") {
        setEmail("");
        setPassword("");
        console.log("Navigating to /");
        navigate("/");
        console.log(result);
      }
    });
  };

  return (
    <>
      <Row className="p-5 mb-5">
        <Col lg={3} md={6} sm={12}></Col>

        <Col lg={3} md={6} sm={12}>
          <div className="login-main">
            <div className="login card-login-animation">
              <div className="form">
                <form noValidate onSubmit={handleLoginEvent}>
                  <Image
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    width={"120px"}
                    className="mb-3"
                  ></Image>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email id / username"
                    className="form-control inp_text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button className="btn btn-primary w-100 mt-6">
                    {loading ? "Loading..." : "Login"}
                  </button>
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <div className="login card-right">
            <div className="form">
              <div className="text-center mt-5">
                <Image
                  src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                  width={"100px"}
                ></Image>
                <hr />
                <div className="right-card-bottom-logo">
                  <span className="rigth-card-job">Aradığın "İş" Burada!</span>
                  <br />
                  <Button className="btn-sm">Başvur</Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <div className="col-3"></div>
      </Row>
    </>
  );
}
