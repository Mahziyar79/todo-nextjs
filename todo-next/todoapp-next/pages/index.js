import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import TodoForm from "../components/todos/addNewTodo";
import TodoList from "../components/todos/todoList";
import Layout from "../containers/Layout";
import Todo from "../server/models/todo";
import dbConnect from "../server/utils/dbConnect";

export default function Home({ todos }) {
  const [data, setData] = useState(todos);

  // delete function
  const deleteHandler = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        setData(res.data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  // add Todo function
  const addTodo = (e, formData, setFormData) => {
    e.preventDefault();
    if (formData.title && formData.description) {
      axios
        .post(`/api/todos/`, { formData })
        .then((res) => {
          setData(res.data.todos);
          setLoading(false);
        })
        .catch((err) => console.log(err));
      setFormData({ title: "", description: "" });
    } else {
      alert("please fill out title and description");
    }
  };

  // complete todo
  const completeHandler = (id) => {
    axios
      .put(`/api/todos/complete/${id}`)
      .then((res) => {
        setData(res.data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Head>
        <title>todo app nextjs</title>
        <meta name="description" content="todo app with next.js and mongodb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex flex-col items-center">
          <TodoForm onAdd={addTodo} />

          {/* show todo list */}
          <TodoList
            data={data}
            onDeleteTodo={deleteHandler}
            onCompleteTodo={completeHandler}
          />
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  dbConnect();
  const todos = await Todo.find({});
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}
