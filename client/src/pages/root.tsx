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
import MenuPage from "./MenuPage";
import Orders from "./OrdersPage";
import { useSelector, useDispatch } from "react-redux";

const queryParams = new URLSearchParams(window.location.search);

const token = queryParams.get("access_token") || localStorage.getItem("accessToken") || '';
localStorage.setItem("accessToken", token); 
if (token) {
    login(token);
}

queryParams.delete("access_token");

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <HomePage token={token} />,
    },
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/Menu",
        element: <MenuPage token={token} />

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