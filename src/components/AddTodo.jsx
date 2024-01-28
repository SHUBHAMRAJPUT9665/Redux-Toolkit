// AddTodo.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const notify = () => toast("Wow so easy!");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Enter Todo");
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <>
      <form
        onSubmit={addTodoHandler}
        className="max-w-md mx-auto my-4 p-6 bg-white rounded shadow-md"
      >
        <div className="mb-4">
          <label
            className=" text-center block text-gray-700 text-sm font-bold mb-2"
            htmlFor="num1"
          >
            Add Todo
          </label>
          <input
            className="flex flex-row appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Add todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddTodo;
