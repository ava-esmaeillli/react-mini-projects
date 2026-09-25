import EditIcon from "../components/EditIcon";
import DeleteIcon from "../components/DeleteIcon";
import TodoEditForm from "./TodoEditForm";
import { useState } from "react";

export default function TodoListItem({
  todo,
  deleteTodo,
  toggleTodoStatus,
  editTodoTitle,
}) {
  const [editMode, setEditMode] = useState(false);

  return (
    <li className="relative flex items-center justify-between px-2 py-6 border-b">
      {editMode ? (
        <TodoEditForm
          todo={todo}
          editTodoTitle={editTodoTitle}
          onCancel={() => setEditMode(false)}
        />
      ) : (
        <div className="flex items-center justify-between w-full">
          <div>
            <input
              type="checkbox"
              checked={todo.status}
              onChange={() => toggleTodoStatus(todo)}
            />

            <p
              className={`inline-block mt-1 ml-2 text-gray-600 ${
                todo.status ? "line-through" : ""
              }`}
            >
              {todo.title}
            </p>
          </div>

          <div className="absolute right-0 flex items-center space-x-1">
            <EditIcon onClick={() => setEditMode(true)} />

            <DeleteIcon onClickDeleteBtnHandler={() => deleteTodo(todo)} />
          </div>
        </div>
      )}
    </li>
  );
}
