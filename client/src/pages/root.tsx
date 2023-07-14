import React from "react";
import App from "./App";
import Dashboard from "./Dashboard";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { User } from '../models';

const queryParams = new URLSearchParams(window.location.search);
console.log(queryParams.get("access_token"));

const token = queryParams.get("access_token") || "";
queryParams.delete("access_token");

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <App token={token} />,
    },
    {
        path: "/",
        element: <Dashboard />
    }
]);


export default function Root() {
    return (
        <RouterProvider router={router} />
    );
}