import DeleteIcon from './DeleteIcon'

export default function TodoEditForm({ todo, editTodoTitle, onCancel }) {
  const editTodoHandler = (event) => {
    if (event.key === "Enter") {
      editTodoTitle(todo, event.target.value);
      onCancel();
    }
  };

  return (
    <div className="flex items-center w-full gap-2">
      <input
        type="text"
        defaultValue={todo.title}
        onKeyDown={editTodoHandler}
        className="w-full px-4 py-2 border border-gray-200 rounded"
      />

      <DeleteIcon onClickDeleteBtnHandler={onCancel} />
    </div>
  );
}
