// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://todo-app-vn29.onrender.com/api/todos',
});

export default instance;
