import React, { useContext } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs]= useState({
    username:"",
    password:""
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  // console.log(currentUser)

  const handleChange = (e) => {
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}));
  }

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const res = await axios.post("/auth/login", inputs);
      // console.log(res);
      await login(inputs);
      navigate("/");
    } catch (error) {
      // console.log(error)
      setErr(error.response.data);
    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input required type="text" name="username" id="" placeholder='username'onChange={handleChange} />
        <input required type="password" name='password' placeholder='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login