const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'Backend do Alexandre funcionando! 🚀' });
});

app.get('/estudos', (req, res) => {
  res.json([
    { id: 1, materia: 'Node.js', status: 'aprendendo' },
    { id: 2, materia: 'Linux', status: 'dominado!' }
  ]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});