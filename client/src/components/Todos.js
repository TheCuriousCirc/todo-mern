import React from "react";
import Todo from "./Todo";

const Todos = ({
  todos,
  setText,
  deleteTodo,
  currentTodo,
  toggleDoneTodo,
  setCurrentTodo,
}) => {
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        if (currentTodo && todo._id === currentTodo._id) return null;
        return (
          <Todo
            key={todo._id}
            todo={todo}
            setText={setText}
            deleteTodo={deleteTodo}
            toggleDoneTodo={toggleDoneTodo}
            setCurrentTodo={setCurrentTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
