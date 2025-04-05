import { Request, Response } from 'express';
import { getAllTasks, createTask, getTaskById, updateTask, deleteTask } from '../models/taskModel';

export async function listTasks(req: Request, res: Response) {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
}

// export async function newTask(req: Request, res: Response) {
//   const { title, description } = req.body;
//   if (!title) return res.status(400).json({ error: 'Título é obrigatório' });

//   try {
//     const result = await createTask(title, description || '');
//     res.status(201).json({ id: (result as any).insertId, title, description });
//   } catch (err) {
//     res.status(500).json({ error: 'Erro ao criar tarefa' });
//   }
// }

export const newTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description } = req.body;

  // Verifica se o título foi fornecido
  if (!title) {
    res.status(400).json({ error: 'Título é obrigatório' });
  }

  try {
    // Chama a função para criar a tarefa no banco de dados
    const result = await createTask(title, description || '');
    res.status(201).json({ id: (result as any).insertId, title, description });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

export const getTask = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const task = await getTaskById(id);
  if (!task) {
    res.status(404).json({ error: 'Tarefa não encontrada' });
    return;
  }
  res.json(task);
};

export const editTask = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const { title, description, status } = req.body;
  await updateTask(id, title, description, status);
  res.json({ message: 'Tarefa atualizada com sucesso' });
};

export const removeTask = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  await deleteTask(id);
  res.json({ message: 'Tarefa excluída com sucesso' });
};
