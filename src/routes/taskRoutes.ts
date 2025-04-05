import express from 'express';
import {
    listTasks,
    newTask,
    getTask,
    editTask,
    removeTask
  } from '../controllers/taskController';

const router = express.Router();

router.get('/tasks', listTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', newTask);
router.put('/tasks/:id', editTask);
router.delete('/tasks/:id', removeTask);

export default router;
