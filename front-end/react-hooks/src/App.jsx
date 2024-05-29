import { useId, useMemo, useState } from "react";

const App = () => {
  // const [state, setState] = useState(0);
  const [number, setNumber] = useState(0);

  // const passwordHintId = useId();

  // const handleDecrement = () => {
  //   setState((prev) => (prev -= 1));
  // };

  // const handleIncrement = () => {
  //   setState((prev) => (prev += 1));
  // };

  const increment = () => {
    setNumber(number + 1);
  };

  const isNumberEven = useMemo(() => {
    let i = 0;

    while (i < 999999999) {
      i++;
    }

    return number % 2 === 0;
  }, []);

  return (
    <>
      {/* <h1>{state}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button> */}
      <div style={{ marginTop: "10px" }}>
        <p>{isNumberEven ? `${number} is Even!` : `${number} is Odd!`}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};

export default App;
