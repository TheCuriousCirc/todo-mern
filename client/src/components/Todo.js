import React from "react";

const Todo = ({ todo, deleteTodo, setCurrentTodo }) => {
  return (
    <div className="todo">
      <p>{todo.title}</p>
      <button
        className="todo-button"
        type="button"
        onClick={() => deleteTodo(todo._id)}
      >
        ❌
      </button>
      <button
        className="todo-button"
        type="button"
        onClick={() => setCurrentTodo(todo)}
      >
        ✏️
      </button>
    </div>
  );
};

export default Todo;
