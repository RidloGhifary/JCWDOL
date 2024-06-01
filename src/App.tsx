import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<p>About page</p>} />
      <Route path="/cars" element={<p>Cars page</p>} />
      <Route path="/teams" element={<p>Teams page</p>} />
    </Routes>
  );
};

export default App;
