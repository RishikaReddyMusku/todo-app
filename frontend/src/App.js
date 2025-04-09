import React, { useEffect, useState } from 'react';
import axios from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

// src/App.js or wherever you're fetching
const API_URL = "https://todo-app-vn29.onrender.com/api";

useEffect(() => {
  fetch(`${API_URL}/todos`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("Fetch error:", err));
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
