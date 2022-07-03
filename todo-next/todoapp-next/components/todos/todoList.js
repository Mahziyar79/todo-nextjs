import { TrashIcon, PencilAltIcon, CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

const todoList = ({ data, onDeleteTodo , onCompleteTodo }) => {
  if (!data.length) {
    return <h2 className="font-bold text-2xl mt-12">Please Add Some Todos!</h2>;
  }
  return (
    <div className="container p-8 xl:max-w-screen-xl mx-auto bg-white rounded-lg mt-12">
      {data.map((todo) => {
        return (
          <div
            key={todo._id}
            className="border-2 rounded-lg p-6 my-6 border-slate-100 flex justify-between items-center"
          >
            <div>
              <Link href={`/todos/${todo._id}`}>
                <a>
                  <h1
                    className={`text-xl ${todo.isCompleted && "line-through"}`}
                  >
                    {todo.title}
                  </h1>
                </a>
              </Link>
            </div>
            <div className="flex items-center gap-x-3">
              <button onClick={()=> onCompleteTodo(todo._id)}>
                {todo.isCompleted ? (
                  <CheckIcon className="h-7 w-7 stroke-green-500" />
                ) : (
                  <span className="w-5 h-5 block border-2 border-gray-600 rounded-full"></span>
                )}
              </button>
              <button>
                <TrashIcon
                  onClick={() => onDeleteTodo(todo._id)}
                  className="h-7 w-7 stroke-red-500"
                />
              </button>
              <Link href={`/todos/edit/${todo._id}`}>
                <a>
                  <PencilAltIcon className="h-7 w-7 stroke-blue-500" />
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default todoList;
