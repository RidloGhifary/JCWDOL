import React from "react";
import { TeamsContextProvider } from "./context/TeamsContext";
import { useLocation } from "react-router-dom";
import App from "./App";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
const Footer = React.lazy(() => import("./components/Footer"));
const Download = React.lazy(() => import("./components/Download"));

const Root: React.FC = () => {
  const [showButtonScrollToTop, setShowButtonScrollToTop] =
    React.useState<boolean>(false);
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) setShowButtonScrollToTop(true);
      else setShowButtonScrollToTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <React.StrictMode>
      <TeamsContextProvider>
        <main className="container max-w-7xl">
          {!isNotFoundPage && <Navbar />}
          <App />
          <ScrollToTop showButtonScrollToTop={showButtonScrollToTop} />
          {!isNotFoundPage && (
            <React.Suspense fallback={<p className="text-center">Loading</p>}>
              <Download />
              <Footer />
            </React.Suspense>
          )}
        </main>
      </TeamsContextProvider>
    </React.StrictMode>
  );
};

export default Root;
