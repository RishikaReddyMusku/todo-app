import React, { useState } from 'react';
import axios from '../api';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    const res = await axios.post('/', { task });
    onAdd(res.data);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
