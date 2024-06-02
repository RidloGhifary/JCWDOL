import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));

const App: React.FC = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<p>Cars page</p>} />
        <Route path="/teams" element={<p>Teams page</p>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
