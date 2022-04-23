import React, { useEffect, useState } from 'react';
import { Input, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { Auth } from '../../Redux/Actions';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`${process.env.REACT_APP_BASE_URL}/login`, { email, password }).then(response => {
      console.log(response)

      alert(response.data.msg);
      const token = response.data.token;
      const name = response.data.name
      if (token) {
        dispatch(Auth(token, name))
      }
      setEmail('')
      setPassword('');
      navigator('/')
    });

  }


  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <Input
          placeholder="Enter Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="Enter Password"
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login </Button>
      </form>
      <div className="suggestion">
        <p>
          {' '}
          Don't have an Account? <Link to="/signup">Create Account</Link>
        </p>
        <Link to="/forgotpassword">Forgotten Password?</Link>
      </div>


    </div>
  );
};

export default Login;
