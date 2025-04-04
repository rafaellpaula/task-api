import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API funcionando com Node.js + Express + TypeScript 🚀');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
