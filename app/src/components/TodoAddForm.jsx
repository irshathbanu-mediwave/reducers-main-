import { useState } from "react";

const TodoAddForm = ({ handleAdd }) => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAdd(text);
    setText("");
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label> Enter the task
        <input
          type="text"
          required
          onChange={(e) => {
            setText(e.target.value);
          }}
          maxLength="10"
          value={text}
        />
      </label>
      <button type="submit">Add value</button>
    </form>
  );
};

export default TodoAddForm;
