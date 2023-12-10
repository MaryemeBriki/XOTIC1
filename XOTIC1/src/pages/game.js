import React from 'react';
import "../styles/global.css";
import TicTacToe from '../components/TicTacToe';
import Header from '../components/header';

const TicTacToePage = () => {
  return (
<div className="app">
  <div className="content">
   <Header />
   </div>
   <div className="content">
   <h1>Jouer au Tic Tac Toe</h1>
    <TicTacToe />
    </div>
</div>
  );
};

export default TicTacToePage;