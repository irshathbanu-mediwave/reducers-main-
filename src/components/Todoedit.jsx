import React, { useState } from "react";
function Update() {
  const [inputValue, setInputValue] = useState(""); // Initialize state for the input value
  const handleUpdate = (e) => {
    e.preventDefault();

    console.log(" setInputValue");
  };
  return (
    <>
      <div>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
}
export default Update;
