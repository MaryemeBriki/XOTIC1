import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const buttonStyle = {
    backgroundColor: '#F7EE1A',
    hover: {
      backgroundColor: '#D6CA00', // Optional: Change the hover color
    },
    color: 'black', // Text color
  };

  return (
    <header className="p-4 text-left bg-blue-500 text-white flex justify-between items-center" style={{ backgroundColor: '#2980b9' }}>
      <Helmet>
        {/* Your Helmet content here */}
      </Helmet>
      <div className="flex-grow">
        <h1 className="text-4xl font-bold mb-2 text-yellow-500" style={{ color: '#F7EE1A' }}>
          Tic Tac Toe Game
        </h1>
        <div className="flex">
          <p>
            <Link to="/" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
              Home
            </Link>
          </p>
          <p className="ml-4">
           
            <Link to="/components/TicTacToe" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
              Tic Tac Toe
            </Link>
          </p>
          <p className="ml-4">
            <Link to="/about" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
              About
            </Link>
          </p>
        </div>
        <div className="flex justify-center items-center">
          {/* Any additional content you want to include */}
        </div>
      </div>
      <div>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
          <button
            className="focus:outline-none font-bold py-2 px-4 rounded"
            style={{ backgroundColor: buttonStyle.backgroundColor, color: 'black' }}
          >
            Sign In
          </button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none', marginLeft: '10px' }}>
          <button
            className="focus:outline-none font-bold py-2 px-4 rounded"
            style={{ backgroundColor: buttonStyle.backgroundColor, color: 'black' }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
