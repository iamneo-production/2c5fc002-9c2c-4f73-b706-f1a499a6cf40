import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Fragment, useState, useRef } from "react";
import img1 from "../Image/Proj.png";
import {Link} from 'react-router-dom'


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
      <h3
        className="container-fluid bg-primary p-2 text-white"
        style={{ textAlign: "center" }}
      >
        Login
      </h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <form className="text-left" onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  ref={Userid}
                  id="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <br></br>

              <Form.Group className="mb-3">
                <Form.Control
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
            </form>

            <div className="text-center">
              <br></br>
              
                <small>Already a user?</small>
                <Link to="\signup">    
                <small className="reset"> SignUp</small>
              </Link>
            </div>
          </Col>
          <Col lg={5} md={5} sm={12}>
            <img className="h-90 w-100 " src={img1}></img>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Login;

