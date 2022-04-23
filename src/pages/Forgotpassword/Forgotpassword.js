import React, { useState } from 'react';
import { Input, Button } from '@mui/material';
import  Axios  from 'axios';


const Forgotpassword = () => {
  const [email, setEmail] = useState('');

const handleSubmit=(e)=>{
e.preventDefault();
Axios.post(`${process.env.REACT_APP_BASE_URL}/forgotpassword`,{email:email}).then(res=>alert(res.data.msg))

}

  return (
    <div className="forgotpassword">
      <form className="form" onSubmit={handleSubmit}>
        <Input
          value={email}
          placeholder="Account Email Id"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Send Link for New Password</Button>
      </form>
    </div>
  );
};

export default Forgotpassword;
