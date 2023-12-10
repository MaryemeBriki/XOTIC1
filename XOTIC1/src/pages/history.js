// Exemple de composant React pour afficher l'historique des jeux
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer l'historique des jeux
    axios.get('/api/game/history')
      .then(response => {
        setHistory(response.data.history);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de l\'historique des jeux :', error);
      });
  }, []); // Le tableau vide en tant que deuxième argument garantit que useEffect s'exécute une seule fois lors du montage.

  return (
    <div>
      <h2>Historique des Jeux</h2>
      <ul>
        {history.map(game => (
          <li key={game.id}>
            Joueur ID: {game.player_id}, Moves: {game.moves}, Résultat: {game.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;
