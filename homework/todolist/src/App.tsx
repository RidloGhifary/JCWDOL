import { ChangeEvent, FormEvent, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";

interface ToDoListProps {
  id: string;
  title: string;
  checked: boolean;
}

export default function App() {
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [toDoListDatas, setToDoListDatas] = useState<ToDoListProps[]>([
    {
      id: "1",
      title: "Create Guest Experience mobile check-in",
      checked: false,
    },
    {
      id: "2",
      title: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
      checked: false,
    },
    {
      id: "3",
      title: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
      checked: false,
    },
  ]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  };

  const handleStatusListChange = (id: string) => {
    setToDoListDatas((prevToDos) =>
      prevToDos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const handleDeleteToDoList = (id: string) => {
    setToDoListDatas((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const submitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoTitle.length > 1 && newTodoTitle.trim()) {
      setToDoListDatas((prevToDos) => [
        ...prevToDos,
        { id: Date.now().toString(), title: newTodoTitle, checked: false },
      ]);
      setNewTodoTitle("");
    }
  };

  return (
    <main className="bg-almostBlack container flex min-h-[100vh] items-center justify-center text-gray-200">
      <div className="min-w-[40%]">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Chores ToDo List
        </h1>
        <div className="flex max-h-[300px] flex-col-reverse gap-6 overflow-y-auto">
          <TransitionGroup component={null}>
            {toDoListDatas.length === 0 ? (
              <div className="rounded-md border border-rose-400 p-3 text-rose-400">
                Your to-do list will be here
              </div>
            ) : null}
            {toDoListDatas?.map((data, _) => (
              <CSSTransition key={data.id} timeout={200} classNames="todo-item">
                <div className="flex select-none items-center justify-between gap-16">
                  <div className="flex items-center gap-6">
                    <input
                      type="checkbox"
                      id={data.id}
                      checked={data.checked}
                      onChange={() => handleStatusListChange(data.id)}
                      className="border-grassGreen checked:bg-grassGreen h-[1.15rem] w-[1.15rem] cursor-pointer appearance-none rounded-sm border-2"
                    />
                    <label
                      htmlFor={data.id}
                      className={`text-textGray cursor-pointer font-light ${data.checked ? "line-through" : null}`}
                    >
                      <p>{data.title}</p>
                    </label>
                  </div>

                  <div
                    className="border-pinkPig flex cursor-pointer items-center justify-center rounded-md border p-1.5"
                    onClick={() => handleDeleteToDoList(data.id)}
                  >
                    <img
                      src="/trash.svg"
                      alt="trash"
                      className="w-5 transition hover:scale-105"
                    />
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <hr className="my-6 border-gray-700" />
        <h1 className="text-center text-2xl">
          Done:{" "}
          <span>{toDoListDatas.filter((todo) => todo.checked).length}</span>
        </h1>
        <form className="mt-6 flex flex-col gap-3" onClick={submitTodo}>
          <label htmlFor="addTodo" className="text-textGray">
            Add todo
          </label>
          <input
            id="addTodo"
            name="addTodo"
            value={newTodoTitle}
            onChange={handleInputChange}
            className="border-textGray/50 text-textGray rounded-md border bg-transparent p-2 px-3 focus:outline-none"
          />
          <button
            type="submit"
            disabled={newTodoTitle.length <= 0}
            className={`bg-blueSky text-almostBlack hover:bg-blueSky/70 disabled:bg-blueSky/50 w-fit rounded-md px-4 py-2 text-sm font-semibold uppercase transition disabled:cursor-not-allowed`}
          >
            add task
          </button>
        </form>
      </div>
    </main>
  );
}
