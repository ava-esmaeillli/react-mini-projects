import { useState } from "react";
import TodoList from "../components/TodoList";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  let [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Clean the room",
      status: true,
    },

    {
      id: uuidv4(),
      title: "Go for a walk",
      status: false,
    },
  ]);

  const deleteTodoHandler = (todo) => {
    let newTodos = todos.filter((todoItem) => todoItem.id !== todo.id);
    setTodos(newTodos);
  };

  const editTodoTitleHandler = (todo , newTitleValu) => {
    const newTodos = todos.map((todoItem) => {
      if (todoItem.id === todo.id) {
        return {
          ...todoItem,
          title: newTitleValu,
        };
      }

      return todoItem;
    });

    setTodos(newTodos);
  };

  const toggleTodoStatusHandler = (todo) => {
    const newTodos = todos.map((todoItem) => {
      if (todoItem.id === todo.id) {
        return {
          ...todoItem,
          status: !todoItem.status,
        };
      }

      return todoItem;
    });

    setTodos(newTodos);
  };

  const addNewTodoHandler = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: event.target.value,
          status: false,
        },
      ]);

      event.target.value = "";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">
            {" "}
            TO DO APP
          </h1>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="What needs to be done today?"
            className="w-full px-2 py-3 border rounded outline-none border-grey-600"
            onChange={() => {}}
            onKeyDown={addNewTodoHandler}
          />
        </div>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodoStatus={toggleTodoStatusHandler}
          editTodoTitle={editTodoTitleHandler}
        />
      </div>
    </div>
  );
}
