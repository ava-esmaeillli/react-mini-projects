import TodoListItem from "../components/TodoListItem";

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodoStatus,
  editTodoTitle,
}) {
  return (
    <ul className="list-reset">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodoStatus={toggleTodoStatus}
          editTodoTitle={editTodoTitle}
        />
      ))}
    </ul>
  );
}
