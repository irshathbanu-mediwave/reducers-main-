import React, { useState } from "react";
function Update({ text, onSave }) {
  const [editvalue, seteditValue] = useState(text);
  const handleSave = () => {
    onSave(editvalue);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={editvalue}
          onChange={(e) => seteditValue(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </>
  );
}
export default Update;
