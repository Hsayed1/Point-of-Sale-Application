import React from "react";
import App from "./App";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { getAccessToken, login, store } from "../utils/store";

import { User } from '../models';
import OrderScreenApp from "./OrderScreenApp";
import Menu from "./Menu";
import Orders from "./Orders";
import { useSelector, useDispatch } from "react-redux";

const queryParams = new URLSearchParams(window.location.search);

const token = queryParams.get("access_token") || '';

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
        element: <Menu token={token} />

    },
    {
        path: "/Orders",
        element: <Orders token={token}/>

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