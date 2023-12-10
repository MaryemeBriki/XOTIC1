import React from 'react';
import { useLocation } from '@reach/router';
import Header from '../components/header.js';
import TicTacToe from '../components/TicTacToe.js';
import '@fortawesome/fontawesome-free/css/all.css';

const PlayPage = () => {
  const location = useLocation();
  const opponent = new URLSearchParams(location.search).get('opponent');

  return (
    <div>
      <Header />
      <h1>{`Playing Against ${opponent === 'player' ? 'Another Player' : 'the Computer'}`}</h1>
      <TicTacToe opponent={opponent} /> {/* Pass opponent as a prop */}
    </div>
  );
};

export default PlayPage;
