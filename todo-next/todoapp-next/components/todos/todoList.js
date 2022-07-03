import { TrashIcon, PencilAltIcon, CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

const todoList = ({ data, onDeleteTodo }) => {
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
                  <h1 className="text-xl">{todo.title}</h1>
                </a>
              </Link>
            </div>
            <div className="flex items-center gap-x-3">
              <button>
                <CheckIcon className="h-7 w-7 stroke-green-500" />
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
