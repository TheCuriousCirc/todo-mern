import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
import axios from "axios";

const todoApiUrl = "http://localhost:4000/api/todo";

const getTodos = () => {
  return axios.get(todoApiUrl);
};

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = async (event) => {
    event.preventDefault();
    const _todos = [...todos];

    const { data } = await axios.post(todoApiUrl, { title: text });

    console.log(data);

    _todos.push(data);

    setTodos(_todos);
    setText("");
  };

  const updateTodo = async (event) => {
    event.preventDefault();

    const _todos = [...todos];
    const todoIdx = _todos.findIndex((todo) => todo._id === currentTodo._id);
    _todos[todoIdx].title = text;

    await axios.put(`${todoApiUrl}/${currentTodo._id}`, { title: text });

    setTodos(_todos);
    setCurrentTodo(null);
    setText("");
  };

  const deleteTodo = async (id) => {
    const _todos = [...todos];
    await axios.delete(`${todoApiUrl}/${id}`);
    const filtered = _todos.filter((todo) => todo._id !== id);
    setTodos(filtered);
  };

  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.title);
    }
  }, [currentTodo]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodos();
      setTodos(data);
    })();
  }, []);

  const editMode = !!currentTodo;

  return (
    <div className="container">
      <p>Todo Application</p>
      <p>{`Edit mode: ${editMode}`}</p>
      <Form
        text={text}
        setText={setText}
        addTodo={addTodo}
        updateTodo={updateTodo}
        editMode={editMode}
      />
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        setCurrentTodo={setCurrentTodo}
        currentTodo={currentTodo}
      />
    </div>
  );
}

export default App;
