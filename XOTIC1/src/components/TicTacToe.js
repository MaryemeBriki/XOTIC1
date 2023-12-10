import React, { useState, useEffect, useCallback } from 'react';

// ... (import statements)

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [mode, setMode] = useState('player'); // Default mode is player vs player

  const winningPositions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkWinner = () => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningLine([a, b, c]);
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = () => {
    return board.every(cell => cell !== '');
  };

  const makeComputerMove = () => {
    const availableMoves = board.reduce((acc, cell, index) => {
      if (!cell) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (availableMoves.length > 0 && !gameOver) {
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      handleCellClick(availableMoves[randomIndex]);
    }
  };
  useEffect(() => {
    const winnerPlayer = checkWinner();
    if (winnerPlayer) {
      setWinner(winnerPlayer);
      setGameOver(true);
    } else if (isBoardFull()) {
      setWinner('Draw');
      setGameOver(true);
    } else if (mode === 'computer' && currentPlayer === 'O') {
      // Computer's turn
      makeComputerMove();
    }
  }, [board, currentPlayer, gameOver, mode]);

  const handleCellClick = useCallback(
    (index) => {
      if (gameOver || board[index]) return;

      const newBoard = [...board];
      newBoard[index] = currentPlayer;

      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    },
    [board, currentPlayer, gameOver]
  );

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningLine([]);
    setGameOver(false);
  };

  const renderCell = (index) => {
    let cellContent;
    if (board[index] === 'X') {
      cellContent = 'X';
    } else if (board[index] === 'O') {
      cellContent = 'O';
    }
  
    const isWinningCell = winner && winningLine.includes(index);
  
    return (
      <div
        key={index}
        className={`flex items-center justify-center`}
        style={{
          width: '110px', // Adjust the size as needed
          height: '110px', // Adjust the size as needed
          margin: '2px', // Add margin to separate cells
        }}
      >
        <button
          onClick={() => handleCellClick(index)}
          className={`w-full h-full border-2 border-gray-300 flex items-center justify-center focus:outline-none`}
          disabled={gameOver || board[index] !== ''}
          style={{
            fontSize: isWinningCell ? '6rem' : '4rem',
            color: board[index] === 'X' ? '#D823B0' : 'yellow',
            borderRadius: '30%',
          }}
        >
          {cellContent}
        </button>
        {isWinningCell && (
          <p className={`text-xl font-bold ${board[index] === 'X' ? 'text-pink-500' : 'text-yellow-500'}`}>
           
          </p>
        )}
      </div>
    );
  };
  
  
  

  
  const getWinnerMessage = () => {
    if (winner) {
      let winnerText = `Winner is ${winner}!`;
      let winnerClass = '';

      if (winner === 'X') {
        winnerText = "X";
        winnerClass = 'text-pink-500';
      } else if (winner === 'O') {
        winnerText = "O";
        winnerClass = 'text-yellow-500';
      } else if (winner === 'Draw') {
        winnerText = "It's a Draw!";
      }

      return (
        <div className="flex flex-col items-center">
          <p className={`text-5xl font-bold ${winnerClass}`}>
            {winnerText} 🏆 Winner
          </p>
          <button
            onClick={resetGame}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none"
          >
            Restart
          </button>
        </div>
      );
    } else {
      return (
        <p className="text-2xl font-bold">
          {currentPlayer === 'X' ? "X's turn" : mode === 'player' ? "O's turn" : "Computer's turn"}
        </p>
      );
    }
  };

  const rows = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      row.push(renderCell(index));
    }
    rows.push(<div key={i} className="flex">{row}</div>);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className="mb-4"
        style={{
          position: 'relative',
          width: '500px', // Adjust the width as needed
          height: '500px', // Adjust the height as needed
          borderRadius: '30%',
          backgroundColor: '#2980b9',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {rows}
        </div>
      </div>
      <div className="mb-4">{getWinnerMessage()}</div>
      {!winner && (
        <div className="mb-4">
          <button
            onClick={() => setCurrentPlayer('X')}
            className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-md focus:outline-none mr-4"
          >
            Play as X
          </button>
          <button
            onClick={() => setCurrentPlayer('O')}
            className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md focus:outline-none"
          >
            Play as O
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
