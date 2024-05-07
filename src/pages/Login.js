import React, { useState } from 'react';
import './Login.css';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const Login = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const firebaseConfig = {
    apiKey: "AIzaSyDqC6P_nPfscB8kLxgUeJgTNOKvX5rCdm4",
    authDomain: "educrafter2.firebaseapp.com",
    projectId: "educrafter2",
    storageBucket: "educrafter2.appspot.com",
    messagingSenderId: "579595020880",
    appId: "1:579595020880:web:3a94cd4f90371c9b7bff55"
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }

      const app = initializeApp(firebaseConfig);
      console.log('Firebase initialized');
      const auth = getAuth(app);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', user);

      const database = getDatabase(app);
      const userRef = ref(database, 'users/' + user.uid);
      await set(userRef, {
        name,
        username,
        email,
      });
      console.log('User data stored in database');

      console.log('User signed up successfully:', user);
      // Show alert popup
      alert('You have successfully signed up!');
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error('Signup failed:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
