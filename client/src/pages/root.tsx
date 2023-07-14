import React from "react";
import App from "./App";
import Dashboard from "./Dashboard";
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
} from "react-router-dom";

import { User } from '../models';
import OrderScreenApp from "./OrderScreenApp";


const queryParams = new URLSearchParams(window.location.search);
console.log(queryParams.get("access_token"));

const token_query_param = queryParams.get("access_token");
queryParams.delete("access_token");

if (token_query_param == null) {
    useNavigate()('/');
}
const token = token_query_param || "";

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <App token={token} />,
    },
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/orders",
        element: <OrderScreenApp token={token} />
    }
]);


export default function Root() {
    return (
        <RouterProvider router={router} />
    );
}