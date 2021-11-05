import axios from "axios";

const api_uri = "http://localhost:4000";

export const getTodos = () => {
  return axios.get(`${api_uri}/api/todo`);
};

export const addTodo = (body) => {
  return axios.post(`${api_uri}/api/todo`, body);
};

export const updateTodo = (id, body) => {
  return axios.put(`${api_uri}/api/todo/${id}`, body);
};

export const deleteTodo = (id) => {
  return axios.delete(`${api_uri}/api/todo/${id}`);
};
