import React, { useState } from "react";
import Update from "./Todoedit";
const TodoList = ({
  todos,
  handleEdit,
  handleDelete,
  handleDone,
  handleUpdate,
  handleReorder,
}) => {
  const [dragged, SetDraggedTodo] = useState(null);
  const handleDragStart = (e, todo) => {
    SetDraggedTodo(todo);
  };
  const handleDragover = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, targetTod) => {
    e.preventDefault();
    if (dragged) {
      const updateTodos = [...todos];
      const draggedIndex = updateTodos.findIndex((t) => t.id === targetTod.id);
      const targetIndex = updateTodos.findIndex((t) => t.id === targetTod.id);
      if (draggedIndex !== -1 && targetIndex !== -1) {
        updateTodos.splice(draggedIndex, 1);
        updateTodos.splice(targetIndex, 0, dragged);
        handleReorder(updateTodos);
        SetDraggedTodo(null);
      }
    }
  };
  function handleCheck(e, id) {
    let type = "done";
    if (!e.target.checked) {
      type = "undone";
    }
    handleDone(id, type);
  }

  return (
    <div>
      <h4>Todos list</h4>
      <div>
        {todos.map((t) => (
          <div
            key={t.id}
            className={t.isDone ? "line" : ""}
            draggable
            onDragStart={(e) => handleDragStart(e, t)}
            onDragOver={(e) => handleDragover(e)}
            onDrop={(e) => handleDrop(e, t)}
          >
            {t.isEdit ? (
              <Update
                text={t.text}
                onSave={(newText) => handleUpdate(t.id, newText)}
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={t.isDone}
                  onChange={(e) => handleCheck(e, t.id)}
                />
                {t.text}
                <button onClick={() => handleDelete(t.id)}>Delete</button>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
