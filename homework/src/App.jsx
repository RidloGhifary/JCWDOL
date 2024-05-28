import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";

/* eslint-disable no-undef */
const App = () => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [toDoListDatas, setToDoListDatas] = useState([
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

  const handleInputChange = (e) => {
    setNewTodoTitle(e.target.value);
  };

  const handleStatusListChange = (id) => {
    setToDoListDatas((prevToDos) =>
      prevToDos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const handleDeleteToDoList = (id) => {
    setToDoListDatas((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const submitTodo = (e) => {
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
    <main className="container flex min-h-[100vh] items-center justify-center bg-almostBlack text-gray-200">
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
            {toDoListDatas?.map((data, index) => (
              <CSSTransition key={data.id} timeout={200} classNames="todo-item">
                <div className="flex select-none items-center justify-between gap-16">
                  <div className="flex items-center gap-6">
                    <input
                      type="checkbox"
                      id={index}
                      checked={data.checked}
                      onChange={() => handleStatusListChange(data.id)}
                      className="h-[1.15rem] w-[1.15rem] cursor-pointer appearance-none rounded-sm border-2 border-grassGreen checked:bg-grassGreen"
                    />
                    <label
                      htmlFor={index}
                      className={`cursor-pointer font-light text-textGray ${data.checked ? "line-through" : null}`}
                    >
                      <p>{data.title}</p>
                    </label>
                  </div>

                  <div
                    className="flex cursor-pointer items-center justify-center rounded-md border border-pinkPig p-1.5"
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
            className="rounded-md border border-textGray/50 bg-transparent p-2 px-3 text-textGray focus:outline-none"
          />
          <button
            type="submit"
            className="w-fit rounded-md bg-blueSky px-4 py-2 text-sm font-semibold uppercase text-almostBlack transition hover:bg-blueSky/70"
          >
            add task
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;
