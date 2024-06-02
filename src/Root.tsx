import React from "react";
import { TeamsContextProvider } from "./context/TeamsContext";
import { useLocation } from "react-router-dom";
import App from "./App";

import Navbar from "./components/Navbar";
const Footer = React.lazy(() => import("./components/Footer"));

const Root: React.FC = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";

  return (
    <React.StrictMode>
      <TeamsContextProvider>
        <main className="container max-w-7xl">
          {!isNotFoundPage && <Navbar />}
          <App />
          {!isNotFoundPage && (
            <React.Suspense fallback={<p className="text-center">Loading</p>}>
              <Footer />
            </React.Suspense>
          )}
        </main>
      </TeamsContextProvider>
    </React.StrictMode>
  );
};

export default Root;
