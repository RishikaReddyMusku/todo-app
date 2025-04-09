import React, { useEffect, useState } from 'react';
import axios from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get('/');
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  const addTodo = (todo) => setTodos([...todos, todo]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📝 My Todo List</h2>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
