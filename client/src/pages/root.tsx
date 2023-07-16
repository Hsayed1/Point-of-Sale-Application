import React from "react";
import App from "./App";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { setToken } from "../utils/store";

import { User } from '../models';
import OrderScreenApp from "./OrderScreenApp";
import Menu from "./Menu";
import Orders from "./Orders";

const queryParams = new URLSearchParams(window.location.search);
console.log(queryParams.get("access_token"));

const token = queryParams.get("access_token") || "";
if (token.length > 0) {
    setToken(token);
}
queryParams.delete("access_token");

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <App token={token} />,
    },
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/HomePage",
        element: <HomePage />

    },
    {
        path: "/Menu",
        element: <Menu />

    },
    {
        path: "/Orders",
        element: <Orders/>

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