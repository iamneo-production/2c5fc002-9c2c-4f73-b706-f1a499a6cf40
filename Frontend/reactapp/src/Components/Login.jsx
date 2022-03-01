import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Fragment, useState, useRef } from "react";

import {Link} from 'react-router-dom';

import Button from "./UI/Button";
import classes from "./Login.module.css";
import img1 from '../images/Signup-image.png';


const Login = (props) => {
  const [isError, setisError] = useState(false);
  const Userid = useRef();
  const Password = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    setisError(false);
    const userid = Userid.current.value;
    const password = Password.current.value;
    if (!(userid && password)) {
      setisError(true);
      return;
    }
  };
  return (
    <Fragment>
      <div className={classes.header}>
        <h3>
          Login
        </h3>
      </div>
    
      <Container>
        <Row>
          <Col className={classes.column} lg={6} md={5} sm={12}>
          <h2 style={{textAlign:'center',marginTop:'25px'}}>Login</h2>
          <br/>
            <Form className="text-left w-100" onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  className={classes['form-control']}
                  ref={Userid}
                  id="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <br></br>

              <Form.Group className="mb-3">
                <Form.Control
                  className={classes['form-control']}
                  ref={Password}
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                />
              </Form.Group>
              {isError && (
                <div className="alert alert-danger alert-dismissible fade show m-3">
                  <strong>Error!</strong> Please fill all the input feilds
                </div>
              )}

              <div className="text-center">
                <Button id="loginButton" variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>

            <div className="text-center">
              <br></br>
              <small>Already a user?</small>
                <Link to="/signup">    
                <small className="reset"> SignUp</small>
              </Link>
            </div>
          </Col>
          <Col lg={5} md={4} sm={12}>
            <img className={classes.img} src={img1} alt="Login"></img>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Login;
