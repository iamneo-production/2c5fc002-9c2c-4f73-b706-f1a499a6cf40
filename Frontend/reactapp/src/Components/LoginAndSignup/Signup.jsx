import React from "react";
import { useState, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Form } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import img1 from "../../images/Signup-image.png";
import classes from "./Signup.module.css";
import Button from "../UI/Button";

import { useUserCxt } from "../assests/user-context";

const intialValues = {
  email: "",
  userName: "",
  mobileNumber: "",
  password: "",
  password1: "",
};

const Signup = () => {
  const userCxt = useUserCxt();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({ intialValues });
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const createUserObj = (value) => {
    const tempUser = {};
    tempUser.email = value.email;
    tempUser.userName = value.userName;
    tempUser.mobileNumber = value.mobileNumber;
    tempUser.password = value.password;
    return tempUser;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(formValues);
    const errsKey = Object.keys(errs);
    if (errsKey.length === 0) {
      userCxt.userDispatchFn({
        type: "ADD_USER",
        value: createUserObj(formValues),
      });
      navigate("/login");
    } else {
      setFormErrors(errs);
    }
    // setIsSubmit(true);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).Length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\. [^\s@]{2,}$/i;
    if (!values.userName.trim()) {
      errors.userName = "Username is required!";
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
                  name="userName"
                  value={formValues.userName}
                  onChange={handleChange}
                />
              </Form.Group>
              <p>{formErrors.userName}</p>

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
