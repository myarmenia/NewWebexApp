import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index";

// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<App />} />)
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
    {/* <RouterProvider router={router} /> */}
  </Provider>
);
