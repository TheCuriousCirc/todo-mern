import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./services";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [showCompleted, setShowCompleted] = useState(true);

  const editMode = !!currentTodo;

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!editMode) {
        const { data: todo } = await addTodo({ title: text });
        setTodos((curTodos) => [...curTodos, todo]);
        setText("");
      } else {
        const { data: todo } = await updateTodo(currentTodo._id, {
          title: text,
        });
        setTodos((curTodos) =>
          curTodos.map((curTodo) =>
            curTodo._id === todo._id ? { ...todo } : curTodo
          )
        );
        setCurrentTodo(null);
        setText("");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const _deleteTodo = async (id) => {
    const { data: todo } = await deleteTodo(id);
    setTodos((curTodos) =>
      curTodos.filter((curTodo) => curTodo._id !== todo._id)
    );
  };

  const toggleDoneTodo = async (_todo) => {
    const { data: todo } = await updateTodo(_todo._id, { done: _todo.done });
    setTodos((curTodos) =>
      curTodos.map((curTodo) =>
        curTodo._id === todo._id ? { ...todo } : curTodo
      )
    );
  };

  useEffect(() => {
    getTodos().then(({ data }) => setTodos(data));
  }, []);

  return (
    <div className="container">
      <div>
        <p className="header-title">The Curious Circ Todos</p>
      </div>
      <div className="body">
        <Form
          text={text}
          setText={setText}
          onSubmit={onSubmit}
          editMode={editMode}
        />
        <Todos
          todos={todos.filter((todo) => !todo.done)}
          setText={setText}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          deleteTodo={_deleteTodo}
          toggleDoneTodo={toggleDoneTodo}
        />
        <div>
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            type="button"
            className="completed__button"
          >
            {showCompleted ? (
              <GoChevronDown className="completed__button--icon" />
            ) : (
              <GoChevronRight className="completed__button--icon" />
            )}
            <p
              className="completed__button--text"
              style={{ margin: "0px 5px" }}
            >
              Completed
            </p>
            <p className="completed__button--text">
              {todos.filter((todo) => todo.done).length}
            </p>
          </button>
          {showCompleted && (
            <Todos
              todos={todos.filter((todo) => todo.done)}
              setText={setText}
              currentTodo={currentTodo}
              setCurrentTodo={setCurrentTodo}
              deleteTodo={_deleteTodo}
              toggleDoneTodo={toggleDoneTodo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
