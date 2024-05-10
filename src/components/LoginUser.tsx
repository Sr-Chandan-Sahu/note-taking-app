import React, { useState } from 'react';
import { Input, Button, InputLabel, FormControl } from '@mui/material';
import { Link,useNavigate} from 'react-router-dom';


const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const navigate=useNavigate();
  const validateEmail = (email:string) => {
    if (!email) {
      return 'Email is required';
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return 'Invalid email format';
    }
    return '';
  };

  const validatePassword = (password:string) => {
    if (!password) {
      return 'Password is required';
    }
    return '';
  };

//   const handleEmailChange = (e) => {
//     const { value } = e.target;
//     const error = validateEmail(value);
//     setEmail(value);
//     setEmailError(error);
//   };

//   const handlePasswordChange = (e) => {
//     const { value } = e.target;
//     const error = validatePassword(value);
//     setPassword(value);
//     setPasswordError(error);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const emailError = validateEmail(email);
//     const passwordError = validatePassword(password);

//     setEmailError(emailError);
//     setPasswordError(passwordError);

//     if (!emailError && !passwordError) {
      
//     //   const user = usersData.users.find((user) => user.email === email && user.password === password);
      
//     //   if (user) {
//     //     alert("User logged in successfully")
//     //     navigate('/home-page')
//     //   } else {
//     //     alert('Invalid email or password');
//     //   }
//     // }
//   };
  

  return (
    <div className="container">
      <h1 style={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center' }}>Welcome Back!</h1>
      <div style={{ marginTop: '5px', padding: '10px' }}>
        <FormControl fullWidth variant="standard">
          <InputLabel>Email</InputLabel>
          <Input type="email" value={email}  />
          {emailError && <div style={{ color: 'red', marginTop: '5px' }}>{emailError}</div>}
        </FormControl>
      </div>
      <div style={{ marginTop: '5px', padding: '10px' }}>
        <FormControl fullWidth variant="standard">
          <InputLabel>Password</InputLabel>
          <Input type="password" value={password}  />
          {passwordError && <div style={{ color: 'red', marginTop: '5px' }}>{passwordError}</div>}
        </FormControl>
      </div>
      <div style={{marginTop: '3px', marginLeft: '8px'}}>
        <Link to="/forgot-password" style={{ color: 'blue' }}>
          Forgot password?
        </Link>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button variant="contained" >
          Login
        </Button>
      </div>
      <div style={{ marginTop: '7px', fontSize: '20px', margin: '20px 20px'  }}>
        Don't have an account?{' '}
        <Link style={{ textDecoration: 'underline', color: 'blue' }} to="/sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginUser;
