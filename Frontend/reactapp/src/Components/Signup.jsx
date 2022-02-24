import React from "react";
import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Col,Container,Row,Form, Button,} from 'react-bootstrap';
import img1 from '../images/Login image.jpeg';

const Signup = () => {
  const intialValues = {email:"",userName: "",mobileNumber:"",password:"",password1:""}
  const [formValues,setFormValues] = useState(intialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange =(e)=> {
    const {name,value} =e.target;
    setFormValues({...formValues,[name]:value});

    console.log(formValues);

  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors( validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).Length === 0 && isSubmit){
      console.log(formValues);
    }

  },[formErrors])

  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\. [^\s@]{2,}$/i;
    if(!values.userName){
      errors.userName = "Username is required!";
    }
    if(!values.email){
      errors.email = "E-mail is required!";
    }
    
    if(!values.password){
      errors.password = "Password is required!";
    }
    else if (!values.password.lenght<5)
    {
      errors.password = "Password must be more than 5 characters!";
    }
    else if (!values.password.length>10)
    {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    if(!values.mobileNumber){
      errors.mobileNumber = "MobileNumber is required!";
    }
    if(!values.password1){
      errors.password = "Password is required!";
    }
    return errors;

  }


  return (
  <div>
    <h3 className="container-fluid bg-primary p-2 text-white" style={{textAlign:'center'}}> Register</h3>
    

    <Container>
      
      <Row>
        <Col lg={6} md={6} sm={12}>
        <h2 style={{textAlign:'center'}}>Sign Up</h2>
        <Form  onSubmit={handleSubmit}>
          <br/>
          <br/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
      
          <Form.Control type="email" placeholder="Enter email" 
          name="email"  value={formValues.email} onChange={handleChange} /> 
        </Form.Group>
        <p>{formErrors.email}</p>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
         
          <Form.Control type="text" placeholder="Enter Username" 
          name="userName" value={formValues.userName} onChange={handleChange} />
        </Form.Group>
        <p>{formErrors.userName}</p>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
         
          <Form.Control type="text" placeholder="Enter Mobilenumber" 
          name="mobileNumber" value={formValues.mobileNumber} onChange={handleChange}/>
        </Form.Group>
        <p>{formErrors.mobileNumber}</p>

        <Form.Group className="mb-3" controlId="formBasicPassword">
         
          <Form.Control type="password" placeholder="Password"
          name="password" value={formValues.password} onChange={handleChange}  />
        </Form.Group>
        <p>{formErrors.password}</p>

        <Form.Group className="mb-3" controlId="formBasicPassword">
         
          <Form.Control type="password" placeholder="Confirm Password"
          name="password1" value={formValues.password1} onChange={handleChange}  />
        </Form.Group>
        <p>{formErrors.password1}</p>
        <br/>

        

        <center>
          <Button variant="primary" type="submit" >
          Submit
          </Button>
        </center>
      </Form>


      <div className="text-center">
          <small>Already a user?</small>
         <a href="Login"><small className="reset"> Login</small></a> 
      </div>


        </Col>
        

        <Col lg={6} md={5} sm={12}>
          <img className="w-60 h-60 " src={img1} alt="Signup"></img>
        </Col>
      </Row>
    </Container>
    </div>
  );
};


export default Signup;