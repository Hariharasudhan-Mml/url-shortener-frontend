import React, { useState } from 'react';
import { Input, Button } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';

import Axios from 'axios'

const Signup = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Navigator=useNavigate();

const handleSubmit=(e)=>{
e.preventDefault()
Axios.post(`${process.env.REACT_APP_BASE_URL}/signup`,{firstname:fname,lastname:lname,email,password}).then(response=>{
  alert(response.data.msg);
  setFname('')
  setLname('')
  setEmail('')
  setPassword('')
  Navigator('/')
})


}

  return (
    <div className="signup">
      <form className="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={fname}
          name="fname"
          placeholder="Enter First Name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
        <Input
          type="text"
          value={lname}
          name="lname"
          placeholder="Enter Last Name"
          onChange={(e) => setLname(e.target.value)}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit"> signup </Button>
      </form>
      <div className="suggestion">
        <p>
          Already have an Account ?<Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
