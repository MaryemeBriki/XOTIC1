// src/pages/index.js (et src/pages/about.js)
import React from 'react';
import Header from '../components/header'; // Importez votre en-tête (header) si nécessaire

const HomePage = () => {
  return (
    <div>
   <Header />
    <h1> Tic Tac Toe</h1>
    <p>Tic-tac-toe, also known as noughts and crosses or Xs and Os, is a classic two-player paper-and-pencil game.</p>
    <p>Concept:</p>
    <ol>
  <li>Two players take turns marking squares in a 3x3 grid with their chosen symbol: X or O.</li>
  <li>The first player to place three of their symbols in a row, horizontally, vertically, or diagonally, wins the game.</li>
  <li>If all nine squares are filled without a player achieving three in a row, the game results in a draw.</li>
 
</ol>
<p >How to Play:</p>
<ol>
<li>Choose your symbol: Will you be X or O?</li>
<li>Take turns: Each player marks their symbol in an empty square on the grid.
</li>
<li>Think strategically: Plan your moves to create rows of your symbol while blocking your opponent's attempts.
</li>
<li>Aim for victory: Be the first player to achieve three in a row to win the game.
</li>
<li>No winner? If all nine squares are filled without a player achieving three in a row, the game ends in a draw.
</li>
</ol>
  </div>
  );
};

export default HomePage;