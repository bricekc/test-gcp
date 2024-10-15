const express = require('express');
const app = express();
const port = 8080;
const admin = require('firebase-admin');

app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const snapshot = await db.collection('users').get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
admin.initializeApp();
console.log('Firebase initialisé sur Cloud Run avec l\'authentification par défaut');


// Référence à la base de données Firestore
const db = admin.firestore();

// Route pour créer un document dans la collection "users"
app.post('/api/users', async (req, res) => {
  try {
    const user = req.body;
    const docRef = await db.collection('users').add(user);
    res.status(201).send({ id: docRef.id, ...user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
