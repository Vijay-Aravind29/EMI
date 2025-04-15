import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import './Login.css'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      navigate('/login');
    } catch (error) {
      console.error("Signup error:", error.message);
      alert("Signup failed. Please check your email and password.");
    }
  }

  return (
    <div className="body">
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
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
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;