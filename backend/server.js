const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/estudos', (req, res) => {
  res.json([
    { materia: 'Node.js', status: 'aprendendo' },
    { materia: 'Linux', status: 'dominado' }
  ]);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Só roda o listen no seu PC, na Vercel não precisa
if (!process.env.VERCEL) {
  app.listen(3000, () => {
    console.log('Backend rodando em http://localhost:3000');
  });
}

module.exports = app;