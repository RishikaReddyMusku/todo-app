import React from 'react';
import axios from '../api';

const TodoList = ({ todos, setTodos }) => {
  const toggleComplete = async (todo) => {
    const res = await axios.put(`/${todo._id}`, {
      ...todo,
      completed: !todo.completed,
    });
    setTodos(todos.map((t) => (t._id === todo._id ? res.data : t)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => toggleComplete(todo)}
          >
            {todo.task}
          </span>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
