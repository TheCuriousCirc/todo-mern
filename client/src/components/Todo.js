import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import Checkbox from "./Checkbox";

const Todo = ({
  todo,
  setText,
  deleteTodo,
  setCurrentTodo,
  toggleDoneTodo,
}) => {
  console.log(todo);

  return (
    <div className="todo-item">
      <div className="flex">
        <label>
          <Checkbox
            checked={todo.done}
            onChange={(e) =>
              toggleDoneTodo({ ...todo, done: e.target.checked })
            }
          />
        </label>
        <p
          className="todo-text"
          style={{ textDecoration: todo.done ? "line-through" : "" }}
        >
          {todo.title}
        </p>
      </div>
      <div className="button-container">
        <button
          className="todo-button delete-button"
          type="button"
          onClick={() => deleteTodo(todo._id)}
        >
          <AiFillDelete color="#EF4444" />
        </button>
        <button
          className="todo-button"
          type="button"
          onClick={() => {
            setCurrentTodo(todo);
            setText(todo.title);
          }}
        >
          <BsPencilSquare />
        </button>
      </div>
    </div>
  );
};

export default Todo;
