import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import taskRoutes from './routes/taskRoutes'

dotenv.config()

const app = express()
const port = 3000

app.use(cors()) // <-- ADICIONE AQUI
app.use(express.json())
app.use(taskRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
