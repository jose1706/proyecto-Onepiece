import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../Pages/LoginPageR.tsx";
import { Forgotpage } from "../Pages/passwordForgotPage.tsx";
import { Registerpage } from "../Pages/RegisterPage.tsx";
import { Menu } from "../Pages/Menu.tsx";
import ErrorPage from "../Pages/ErrorPage.tsx";
import { ProtectedRoute } from "./ProtectedRoute.tsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage/>,
    },
    {
      path: "/register",
      element: <Registerpage />,
    },
    {
      path: "/forgot-password",
      element: <Forgotpage />,
    },
    {
        path: "/Menu",
        element: 
      <ProtectedRoute >
        <Menu />
      </ProtectedRoute>
      },
  ]);

  export const AppRouterProvider: FC<Record<string, never>> = () => <RouterProvider router={router}/>;