import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import Menu from "./components/menu/Menu.jsx";

// main page
const App = () => (
  <>
    <Menu />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
