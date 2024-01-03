import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "./UserAuthContext";
import "./Login.css";

const LoginAdmin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="">
        <p className="tab" style={{ color: "white", textAlign: "center" }}>
          ADMIN Login
        </p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="input" id="user" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </Form.Group>
          <br />
          <Form.Group className="input" id="pass" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </Form.Group>
          <br />
          <div className="">
            <Button type="Submit" className="logged">
              Log In
            </Button>
          </div>
        </Form>
        <br />
        <hr />
        <div>
          <br />
          <GoogleButton
            className="button"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>

      <div className=" hr foot-lnk">
        <br />
        {/* Don't have an account? <Link to="/signup"><div style={{color:"white"}}>Sign up</div></Link> */}
      </div>
    </>
  );
};

export default LoginAdmin;
