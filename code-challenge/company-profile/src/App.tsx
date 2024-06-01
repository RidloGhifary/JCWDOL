import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Home page</p>} />
      <Route path="/about" element={<p>About page</p>} />
      <Route path="/cars" element={<p>Cars page</p>} />
      <Route path="/teams" element={<p>Teams page</p>} />
    </Routes>
  );
};

export default App;
