import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Registration from "./components/Registration";
import { useNavigate } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import MainCard from "./components/MainComponents/Maincard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/registration",
    element: <Registration></Registration>,
  },

  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/menu",
    element: <MainCard></MainCard>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
