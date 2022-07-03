import { useState } from "react";
import { getOneTodo } from "../../api/todos/[todoId]";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../../containers/Layout";

const TodoPage = ({ todo }) => {
  const [formData, setFormData] = useState({
    title: todo.title,
    isCompleted: todo.isCompleted,
    description: todo.description,
  });

  const router = useRouter();

  const changeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const OnEditHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/todos/${router.query.todoId}`, { todo: formData })
      .then((res) => {
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="container mx-auto mt-5 flex flex-col items-center">
        <h1 className="font-bold text-2xl">Edit Todo</h1>
        <form
          className="mt-5 bg-white rounded-lg p-5 w-1/2"
          onSubmit={(e) => OnEditHandler(e)}
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
          <div className="flex flex-col mt-3">
            <label>Is Completed ?</label>
            <div className="flex gap-x-1 items-center">
              <input
                checked={formData.isCompleted}
                type="radio"
                name="description"
                onChange={() => setFormData({ ...formData, isCompleted: true })}
              />
              <label>Yes</label>
            </div>
            <div className="flex gap-x-1 items-center">
              <input
                checked={!formData.isCompleted}
                type="radio"
                name="description"
                onChange={() =>
                  setFormData({ ...formData, isCompleted: false })
                }
              />
              <label>No</label>
            </div>
          </div>
          <div className="flex gap-x-3">
            <button
              onClick={() => router.push("/")}
              type="button"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4"
            >
              Update Todo
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
