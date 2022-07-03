import Layout from "../../containers/Layout";
import dbConnect from "../../server/utils/dbConnect";
import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({ todo }) => {
  console.log(todo);
  return (
    <Layout>
      <div>
        <h1>Todo Single Page</h1>
        <h2>Title : {todo.title}</h2>
        <p>Description : {todo.description}</p>
      </div>
    </Layout>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  dbConnect();
  const { query } = context;
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
