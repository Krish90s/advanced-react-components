import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/components",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "components/1",
        element: <Question1 />,
      },
      {
        path: "components/2",
        element: <Question2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
