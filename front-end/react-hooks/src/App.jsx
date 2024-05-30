import { useMemo, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const incrementNumber = () => setNumber((prev) => prev + 1);
  const incrementCount = () => setCount((prev) => prev + 1);

  const isEven = useMemo(() => {
    let i = 0;

    while (i < 200000000) {
      i++;
    }

    return number % 2 === 0;
  }, [number]);

  return (
    <div className="App">
      <button onClick={incrementNumber}>Number :{number}</button>
      <div>{isEven ? `${number} is Even!` : `${number} is Odd!`}</div>
      <button onClick={incrementCount}>Count :{count}</button>
    </div>
  );
}
