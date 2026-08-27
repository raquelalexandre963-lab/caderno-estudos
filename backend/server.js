const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/estudos', (req, res) => {
  res.json([
    { id: 1, materia: 'Node.js', status: 'aprendendo' },
    { id: 2, materia: 'Linux', status: 'dominado!' }
  ]);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando em ${PORT}`));