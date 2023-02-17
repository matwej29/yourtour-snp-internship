import ReactDOM from "react-dom/client";
import React from "react";
import "./styles/main.css";
import debounce from "./helpers/debounce";
import { fixMenuOnScroll } from "./components/menu/_fixed/menu_fixed";

window.onscroll = debounce(() => fixMenuOnScroll(), 10);

const App = () => <></>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
