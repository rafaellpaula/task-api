# Task API

API simples criada com Node.js, Express e TypeScript, com integração a banco de dados MySQL. O objetivo do projeto é consolidar boas práticas de desenvolvimento backend utilizando tecnologias modernas.

## ✨ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## 🚀 Funcionalidades

- [x] Setup inicial com Express + TypeScript
- [x] Conexão com banco de dados MySQL
- [x] Listagem de tarefas (`GET /tasks`)
- [x] Criação de tarefas (`POST /tasks`)
- [x] Buscar tarefa por ID (`GET /tasks/:id`)
- [x] Atualização de tarefa (`PUT /tasks/:id`)
- [x] Remoção de tarefa (`DELETE /tasks/:id`)


## ⚙️ Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/rafaellpaula/task-api.git

# Acesse a pasta
cd task-api

# Instale as dependências
npm install

# Crie um arquivo .env baseado no exemplo (.env.example)

# Inicie o servidor em modo desenvolvimento
npm run dev
