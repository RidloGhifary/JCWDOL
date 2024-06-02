import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import App from "./App";
import { TeamsContextProvider } from "./context/TeamsContext";

const Root: React.FC = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";

  return (
    <React.StrictMode>
      <TeamsContextProvider>
        <main className="container max-w-7xl">
          {!isNotFoundPage && <Navbar />}
          <App />
          {!isNotFoundPage && <Footer />}
        </main>
      </TeamsContextProvider>
    </React.StrictMode>
  );
};

export default Root;
