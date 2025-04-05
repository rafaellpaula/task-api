# 📌 Task API

API RESTful para gerenciamento de tarefas (CRUD) desenvolvida com Node.js, Express, TypeScript e MySQL. O projeto foi deployado na nuvem com Railway (backend + banco de dados).

## 🚀 Deploy

✅ API online: [https://task-api-production-aca3.up.railway.app](https://task-api-production-aca3.up.railway.app)

---

## ✨ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Railway](https://railway.app/) – deploy da API e do banco

---

## 📄 Endpoints disponíveis

### `GET /tasks`
Retorna todas as tarefas.

### `GET /tasks/:id`
Retorna uma tarefa específica pelo ID.

### `POST /tasks`
Cria uma nova tarefa.  
**Body (JSON):**
```json
{
  "title": "Tarefa exemplo",
  "description": "Descrição da tarefa"
}
