import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Root from "./Root.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
);
