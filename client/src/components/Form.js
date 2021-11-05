import React from "react";

const Form = ({ text, setText, onSubmit, editMode }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        <input
          className="form-input"
          type="text"
          value={text}
          placeholder="Create a new todo.."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="form-button" type="submit">
          {editMode ? "Update Todo" : "Add Todo"}
        </button>
      </div>
    </form>
  );
};

export default Form;
