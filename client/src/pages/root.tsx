import React from "react";
import App from "./App";
import Dashboard from "./Dashboard";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { User } from '../models';

const maria: User = {
    id: 1,
    name: 'Maria Doe',
    email: 'maria@example.com',
    password: 'maria123'
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/dashboard",
        element: <Dashboard user={maria} />
    }
]);


export default function Root() {
    return (
        <RouterProvider router={router} />
    );
}