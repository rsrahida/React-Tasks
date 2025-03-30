import React, { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    } else {
      setTodos([]);
    }
  }, []);

  const addTodo = () => {
    if (todo) {
      const newTodos = [
        ...todos,
        { id: Date.now(), text: todo, completed: false },
      ];
      setTodos(newTodos);
      setTodo("");
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  const toggleCompletion = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="todo-list-container">
      <div className="list">
        <h2 className="todo-list-title">Todo List</h2>
        <div className="todo-input-container">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new task"
            className="todo-input"
          />
          <button onClick={addTodo} className="add-todo-btn">
            Add Task
          </button>
        </div>
        <ul className="todo-list">
          {todos.length > 0 ? (
            todos.map((item) => (
              <li
                key={item.id}
                className={`todo-item ${item.completed ? "completed" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleCompletion(item.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">{item.text}</span>
                <button
                  onClick={() => deleteTodo(item.id)}
                  className="delete-todo-btn"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className="noTasks">No tasks available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
