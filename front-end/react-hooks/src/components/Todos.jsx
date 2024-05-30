/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

/* eslint-disable react/prop-types */
const Todos = (props) => {
  const { todos, addTodo } = props;

  console.log("todo rendered");

  return (
    <div>
      <h1>My Todos</h1>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, index) => (
        <p key={index}>{`${index + 1}. ${todo}`}</p>
      ))}
    </div>
  );
};

export default memo(Todos);
