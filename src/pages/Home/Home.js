import './Home.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Home = ({ input, setInput, setItems }) => {
  const token = useSelector(state => state.token)
  const navigator = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault();
    if (token) {
      Axios.post(`${process.env.REACT_APP_BASE_URL}/save`, { longURL: input }, {
        headers: {
          "Authorization": token
        }
      }).then(res => alert(res.data.msg));
    }
    else {
      alert('Please Login to use our platform')
      navigator('/login')
    }
    setInput('');
  
}

  return (<div className='home'>
    <form
      className="inputform"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        name="longURL"
      />
      <button className="input__btn" type="submit">
        Create URL
      </button>
    </form>
    </div>
  );
};

export default Home;
