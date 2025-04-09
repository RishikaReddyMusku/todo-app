const API_URL = "https://todo-app-vn29.onrender.com/api";

fetch(`${API_URL}/todos`)  // ✅ Correct path
  .then(res => res.json())
  .then(data => console.log(data));
