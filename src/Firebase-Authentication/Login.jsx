import { signInWithEmailAndPassword } from 'firebase/auth';

import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { auth } from './Firebase';

import './Login.css';



const Login = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();



  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      console.log("User logged in:", userCredential.user);

      navigate('/home');

    } catch (error) {

      console.error("Login error:", error.message);

      alert("Login failed. Please check your email and password.");

    }

  }



  return (

    <div className="body">

      <div className="Login">

        <form onSubmit={handleSubmit}>

          <h1>Login</h1>

          <input

            type="email"

            placeholder="Enter your email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            required

          />

          <input

            type="password"

            placeholder="Enter your password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

            required

          />

          <button type="submit">Submit</button>

          <span>Don’t have an account?</span>

          <Link to="/">Sign Up</Link>

        </form>

      </div>

    </div>

  );

};



export default Login;   