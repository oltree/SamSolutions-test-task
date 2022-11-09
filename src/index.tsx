import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import MainLayout from "./components/MainLayout";

import "./static/styles/normalize.scss";
import "./static/styles/styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <MainLayout />
  </StrictMode>
);
