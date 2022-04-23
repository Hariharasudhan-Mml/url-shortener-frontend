import React, { useEffect, useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Forgotpassword from './pages/Forgotpassword/Forgotpassword';
import Resetpassword from './pages/Resetpassword/Resetpassword';
import Header from './components/Header/Header';
import Restricted from './pages/Restricted/Restrict';
import { useDispatch, useSelector } from 'react-redux';
import { Auth } from './Redux/Actions';
import Axios from 'axios';
import Table from './pages/Table/Table';
import Notfound from './pages/Notfound/Notfound';

export default function App() {
  const [input, setInput] = useState('');

  const [items, setItems] = useState([]);
  const Authtoken = useSelector(state => state.token)
  const dispatch = useDispatch();
  // const Navigate=useNavigate()




  useEffect(() => {
    const token = localStorage.getItem('token')
    const name = localStorage.getItem('name')
    if (token && name) {
      dispatch(Auth(token, name))
    }

  })




  useEffect(() => {
    if (Authtoken) {
      Axios.get(`${process.env.REACT_APP_BASE_URL}/home`, {
        headers: {
          "Authorization": Authtoken
        }
      }).then(res => setItems(res.data.data))
    }
  }, [input])


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home input={input} setInput={setInput} setItems={setItems} />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/unauthorized' element={<Restricted />} />
        <Route path="/dashboard" element={Authtoken ? <Dashboard items={items} /> : <Navigate to='/unauthorized' />} />
        <Route path="/table" element={Authtoken ? <Table items={items} /> : <Navigate to='/unauthorized' />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword/:token/:id" element={<Resetpassword />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  );
}


//https://url-shortener51.herokuapp.com