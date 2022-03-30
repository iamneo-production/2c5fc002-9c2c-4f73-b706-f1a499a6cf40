import React from "react";
import { useState, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Form } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import img1 from "../../images/Signup-image.png";
import classes from "./Signup.module.css";
import Button from "../UI/Button";

import { useUserCxt } from "../assests/user-context";
import useHttp from "../../hooks/use-http";
import useGenerateId from "../../hooks/generate-id";

const intialValues = {
  email: "",
  username: "",
  mobileNumber: "",
  password: "",
  password1: "",
};

const Signup = () => {
  const userCxt = useUserCxt();
  const navigate = useNavigate();
  const generateId = useGenerateId();
  const { sendRequest: postRequest } = useHttp();
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({ intialValues });
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const createUserObj = (value) => {
    const tempUser = {
      userId: generateId("U"),
      username: value.username,
      email: value.email,
      mobileNumber: value.mobileNumber,
      password: value.password,
      active: true,
      role: "customer",
    };
    return tempUser;
  };

  const createUser = (userData, data) => {
    console.log(data);
    userCxt.userDispatchFn({
      type: "ADD_USER",
      value: { ...userData },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(formValues);
    const errsKey = Object.keys(errs);
    if (errsKey.length === 0) {
      const userData = createUserObj(formValues);
      const requestConfig = {
        url: "https://localhost:5001/api/UserModel/addUser",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: userData,
      };
      postRequest(requestConfig, createUser.bind(null, userData));
      navigate("/login");
    } else {
      setFormErrors(errs);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\. [^\s@]{2,}$/i;
    if (!values.username.trim()) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "E-mail is required!";
    }
    if (regex.test(values.email)) {
      errors.email = "Enter a valid E-mail";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.lenght < 5) {
      errors.password = "Password must be more than 5 characters!";
    } else if (!values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = "MobileNumber is required!";
    }
    if (!values.password1) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <h3>Register</h3>
      </div>
      <Container>
        <Row>
          <Col lg={6} md={5} sm={12}>
            <h2 style={{ textAlign: "center", marginTop: "25px" }}>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <p>{formErrors.email}</p>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </Form.Group>
              <p>{formErrors.username}</p>

              <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                <Form.Control
                  type="text"
                  placeholder="Enter Mobilenumber"
                  name="mobileNumber"
                  value={formValues.mobileNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <p>{formErrors.mobileNumber}</p>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <p>{formErrors.password}</p>

              <Form.Group
                className="mb-3"
                controlId="formBasicReEnteredPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="password1"
                  value={formValues.password1}
                  onChange={handleChange}
                />
              </Form.Group>
              <p>{formErrors.password1}</p>
              <br />
              <center>
                <Button type="submit">Submit</Button>
              </center>
            </Form>

            <div className="text-center">
              <small>Already a user?</small>
              <Link to="/login">
                <small className="reset"> Login</small>
              </Link>
            </div>
          </Col>

          <Col lg={6} md={5} sm={12}>
            <img className={classes.img} src={img1} alt="Signup"></img>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Signup;
