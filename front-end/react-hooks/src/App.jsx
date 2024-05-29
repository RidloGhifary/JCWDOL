import { useId, useState } from "react";

const App = () => {
  const [state, setState] = useState(0);
  const passwordHintId = useId();
  console.log("🚀 ~ App ~ passwordHintId:", passwordHintId);

  const handleDecrement = () => {
    setState((prev) => (prev -= 1));
  };
  const handleIncrement = () => {
    setState((prev) => (prev += 1));
  };

  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default App;
