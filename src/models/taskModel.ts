import pool from '../config/database';

export async function getAllTasks() {
  const [rows] = await pool.query('SELECT * FROM tasks');
  return rows;
}

export async function createTask(title: string, description: string) {
  const [result] = await pool.query(
    'INSERT INTO tasks (title, description) VALUES (?, ?)',
    [title, description]
  );
  return result;
}

export async function getTaskById(id: number) {
  const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
  return (rows as any)[0]; // retorna 1 tarefa
}

export async function updateTask(
  id: number,
  title?: string,
  description?: string,
  status?: string
) {
  const fields = []
  const values = []

  if (title !== undefined) {
    fields.push('title = ?')
    values.push(title)
  }

  if (description !== undefined) {
    fields.push('description = ?')
    values.push(description)
  }

  if (status !== undefined) {
    fields.push('status = ?')
    values.push(status)
  }

  if (fields.length === 0) return // nada a atualizar

  const sql = `UPDATE tasks SET ${fields.join(', ')} WHERE id = ?`
  values.push(id)

  const [result] = await pool.query(sql, values)
  return result
}

export async function deleteTask(id: number) {
  const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
  return result;
}
