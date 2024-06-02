import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Cars = React.lazy(() => import("./pages/Cars"));
const Teams = React.lazy(() => import("./pages/Teams"));

const App: React.FC = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
