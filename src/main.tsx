import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { TeamsContextProvider } from "./context/TeamsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TeamsContextProvider>
        <main className="container max-w-7xl">
          <Navbar />
          <App />
          <Footer />
        </main>
      </TeamsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
