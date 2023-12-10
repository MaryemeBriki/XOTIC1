import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { faUser, faDesktop, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/header';
import '@fortawesome/fontawesome-free/css/all.css';
import '../components/index.module.css'; // Import the CSS file for styling
import { getUser } from "../utils/user"


const HomePage = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleSymbolClick = (symbol) => {
    setSelectedSymbol(symbol);
  };
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="background text-center">
      <Header />
      <h1
        className="text-4xl font-bold mb-6 text-yellow-500 spinning-text"
        style={{ color: '#F7EE1A' }}
      >
        Let's play the Tic Tac Toe Game
      </h1>
       {/* X and O symbols */}
       <FontAwesomeIcon icon={faTimes} className="symbol X" style={{ top: '100%', left: '100%', color: 'pink' }} />
      <FontAwesomeIcon icon={faCircle} className="symbol O" style={{ top: '100%', left: '100%', color: 'yellow' }} />
      <p className="btn btn-primary mt-5" style={{ color: '#231A00', fontSize: '50px' }}>
        choose The opponent
      </p>

      <div className="flex flex-col items-center">
        <Link to="/play?opponent=player">
          <button className="bg-yellow-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-4">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Play VS Player
          </button>
        </Link>
        <Link to="/play?opponent=computer">
          <button className="bg-pink-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            <FontAwesomeIcon icon={faDesktop} className="mr-2" />
            Play VS Computer
          </button>
        </Link>
      </div>

     
    </div>
  );
};
export default HomePage;
