import { useCallback, useState } from "react";
import Todos from "./components/Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, "New Todo"]);
  }, []);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr style={{ margin: "10px 0" }} />
      <button onClick={increment}>Count: {count}</button>
    </div>
  );
};

export default App;
