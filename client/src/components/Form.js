import React from "react";

const Form = ({ text, setText, addTodo, updateTodo, editMode }) => {
  return (
    <div className="form-container">
      <form onSubmit={editMode ? updateTodo : addTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">{editMode ? "Update Todo" : "Add Todo"}</button>
      </form>
    </div>
  );
};

export default Form;
