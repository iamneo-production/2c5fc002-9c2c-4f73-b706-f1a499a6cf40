import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";


function Login() 
{
  const initialValues = {email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    
  };

  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } 
    return errors;
  };
    
    
    return(
        <div className="outer">
        
            <div className="nav-bar"><p>Login</p></div>
              <form  onSubmit={handleSubmit}>
                  <div className="loginBox">
                      
                    <div className="form-group-1">
                        <label for="email">Email ID </label>
                        <input 
                        type="email" 
                        id="email" 
                        className="form-control" 
                        placeholder="Enter Email ID" 
                        name="email"
                        value={formValues.email} 
                        onChange={handleChange}/>
                    </div>
                    <h5>{formErrors.email}</h5>
                    <br/>
                    <div className="form-group-2">
                        <label for="password">Password </label>
                        <input 
                        type="password"  
                        id="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        name="password"
                        value={formValues.password} 
                        onChange={handleChange}/>
                    </div>
                    <h5>{formErrors.password}</h5> 
                    <br/>
                    <button  type="submit" id="submitButton">Login</button>
                    <h3>New User? <Link to="#" id="signupLink">Sign Up</Link></h3>

                        
                    </div>
              </form>
        </div>
    );

}


export default Login; 