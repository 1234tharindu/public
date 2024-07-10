import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LoginImg from "../../assets/log.svg";
import Logo from "../../assets/logo.png";
import apiClient  from '../../api/baseService';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [employeeNo, setEmployeeNo] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  //const [showMessage, setShowMessage] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Validation logic
    let validationErrors = {};
    if (!employeeNo) {
      validationErrors.employeeNo = "Employee number is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Sign In button clicked');
      // setShowMessage(true);
      // navigate('/homecard');

      try {
        const response = await apiClient.post('/Authenticate', {
          userName: employeeNo,
          password: password
        });

        if (response.status === 200) {
          const token = response.data.data;
          localStorage.setItem('jwtToken', token); // Store the JWT token in local storage
          navigate('/homecard');
        } else {
          if (response.status === 401) {
            setErrors({ apiError: 'Incorrect username or password' });
          } else {
            //setErrors({ apiError: 'Authentication failed' });
          }
        }
      } catch (error) {
        //setErrors({ apiError: 'Authentication failed' });
      }
    }
  };
   

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <>
    <div className="login-page">
      <div className="login-left">
        <img alt="" src={LoginImg}/>
      <div className="login-text">        
          Save water today, secure your tomorrow.
      </div></div>
      <div className="login-container">
        <img alt="" src={Logo}/>
        <form className="login-form" onSubmit={handleSignIn}>
          <h2>Login</h2>
          {errors.apiError && <p className="error">{errors.apiError}</p>} 
          <div className="form-group">
            <label htmlFor="employeeNo">Employee No</label>
            <input
              type="text"
              id="employeeNo"
              name="employeeNo"
              value={employeeNo}
              onChange={(e) => setEmployeeNo(e.target.value)}
            />
            {errors.employeeNo && <p className="error">{errors.employeeNo}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group flex-row">
            <label>
              <input type="checkbox" /> Save my details
            </label>
            <span className="forgot-password">Forgot Password?</span>
          </div>
          
          <div className="form-group">
            <Button variant="contained" type="submit">Sign in</Button>
          </div>
          <div className="form-group">
            {/* <p>Don't have an account? Sign Up</p> */}
            <p>Don't have an account? <span className="sign-up" onClick={handleSignUp}>Sign Up</span></p>
          </div>
        </form>
        {/* {showMessage && <p>Hello, good day</p>} */}
      </div>
      </div>
    </>
  );
}
