import React, { useState } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header.js';
import '@fortawesome/fontawesome-free/css/all.css';
import TicTacToe from '../components/TicTacToe.js';

const ChooseOpponentPage = () => {
  const [mode, setMode] = useState('player');

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
  };

  return (
    <div>
      <button
        onClick={() => handleModeChange('player')}
        style={{ backgroundColor: mode === 'player' ? 'lightblue' : 'white' }}
      >
        Player vs Player
      </button>

      <button
        onClick={() => handleModeChange('computer')}
        style={{ backgroundColor: mode === 'computer' ? 'lightblue' : 'white' }}
      >
        Player vs Computer
      </button>
    </div>
  );
};

export default ChooseOpponentPage;
