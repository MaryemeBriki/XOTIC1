import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import Header from '../components/header';
import '../components/index.module.css';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data.message);
      navigate('/choose'); // Redirect or handle successful login
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
    }
  };

  return (
    
    <div className="text-center">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Connection</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email :
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password :
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
        >
          Connection
        </button>
      </form>
      <p className="mt-4">
      You do not have an account ? <Link to="/signup">Register now</Link>
      </p>
    </div>
  );
};

export default SignIn;
