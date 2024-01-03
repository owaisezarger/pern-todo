import axios from "axios";
import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  //get todos functions
  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/todos");
      const data = await response.data;
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  //delete todo function
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await axios.delete(
        `http://localhost:5000/todos/${id}`
      );
      console.log(deleteTodo);
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="text-left mt-5 ">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
