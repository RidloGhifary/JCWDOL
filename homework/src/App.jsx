const App = () => {
  return (
    <main className="bg-almostBlack container flex min-h-[100vh] items-center justify-center text-gray-200">
      <div className="min-w-[40%]">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Chores ToDo List
        </h1>
        <div className="flex max-h-[300px] flex-col-reverse gap-6 overflow-y-auto">
          <div className="flex items-center justify-between gap-16">
            <div className="flex items-center gap-6">
              <input
                type="checkbox"
                id="1"
                className="border-grassGreen checked:bg-grassGreen h-[1.15rem] w-[1.15rem] appearance-none rounded-sm border-2"
              />
              <label
                htmlFor="1"
                className="text-textGray cursor-pointer font-light"
              >
                <p>Create Guest Experience mobile check-in</p>
              </label>
            </div>

            <div className="border-pinkPig flex cursor-pointer items-center justify-center rounded-md border p-1.5">
              <img
                src="/trash.svg"
                alt="trash"
                className="w-5 transition hover:scale-105"
              />
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <h1 className="text-center text-2xl">
          Done: <span>0</span>
        </h1>
        <form className="mt-6 flex flex-col gap-3">
          <label htmlFor="addTodo" className="text-textGray">
            Add todo
          </label>
          <input
            id="addTodo"
            name="addTodo"
            className="border-textGray/50 text-textGray rounded-md border bg-transparent p-2 px-3 focus:outline-none"
          />
          <button className="bg-blueSky text-almostBlack hover:bg-blueSky/70 w-fit rounded-md px-4 py-2 text-sm font-semibold uppercase transition">
            add task
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;
