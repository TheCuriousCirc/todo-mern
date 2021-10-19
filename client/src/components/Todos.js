import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, currentTodo, setCurrentTodo }) => {
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        if (currentTodo && todo._id === currentTodo._id) return null;
        return (
          <Todo
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            setCurrentTodo={setCurrentTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
