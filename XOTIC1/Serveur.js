const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'votre_nom_utilisateur_mysql',
  password: 'votre_mot_de_passe_mysql',
  database: 'tic_tac_toe_db'
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connexion à la base de données établie');
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS players (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullName VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `;
    db.query(createTableQuery, (err) => {
      if (err) {
        console.error('Erreur lors de la création de la table:', err);
      } else {
        console.log('Table "players" créée avec succès');
      }
    });
  }
});

app.post('/api/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const insertQuery = `
    INSERT INTO players (fullName, email, password)
    VALUES (?, ?, ?)
  `;

  const values = [fullName, email, hashedPassword];

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'inscription:', err);
      return res.status(500).json({ message: 'Erreur lors de l\'inscription' });
    }

    return res.status(201).json({ message: 'Inscription réussie' });
  });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const selectQuery = `
    SELECT * FROM players
    WHERE email = ?
  `;

  const selectValues = [email];

  db.query(selectQuery, selectValues, async (err, result) => {
    if (err) {
      console.error('Erreur lors de la connexion:', err);
      return res.status(500).json({ message: 'Erreur lors de la connexion' });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const isPasswordMatch = await bcrypt.compare(password, result[0].password);

    if (isPasswordMatch) {
      return res.status(200).json({ message: 'Connexion réussie' });
    } else {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
