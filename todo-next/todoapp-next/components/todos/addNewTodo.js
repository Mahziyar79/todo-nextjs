import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const changeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="mt-5 bg-white rounded-lg p-5 w-1/2"
      onSubmit={(e) => onAdd(e, formData, setFormData)}
    >
      <div className="flex flex-col">
        <label>Title</label>
        <input
          name="title"
          placeholder="todo title..."
          type="text"
          value={formData.title}
          className="border border-slate-200 rounded-md mt-1 p-2"
          onChange={(e) => changeFormData(e)}
        />
      </div>
      <div className="flex flex-col mt-3">
        <label>Description</label>
        <textarea
          name="description"
          placeholder="todo description..."
          className="border border-slate-200 rounded-md mt-1 p-2"
          value={formData.description}
          onChange={(e) => changeFormData(e)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg mt-4"
      >
        Add New Todo
      </button>
    </form>
  );
};

export default TodoForm;
