import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../Pages/LoginPageR.tsx";
import { Forgotpage } from "../Pages/passwordForgotPage.tsx";
import { Registerpage } from "../Pages/RegisterPage.tsx";
import ErrorPage from "../Pages/ErrorPage.tsx";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import { CorePage } from "../Pages/CorePage.tsx";
import { HomePage } from "../Pages/HomePage.tsx";
import { DevilFruitPage } from "../Pages/DevilFruitPage.tsx";
import { SearchPage } from "../Pages/SearchPage.tsx";
import { RegisterDevilFruitpage } from "../Pages/RegisterDevilFruitPage.tsx";
import { EditDevilFruitPage } from "../Pages/EditDevilFruitPage.tsx";
import { DevilFruitProvider } from "./DevilFruitContext.tsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
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
      path: "/CorePage",
      element: 
      <ProtectedRoute>
        <CorePage />
      </ProtectedRoute>,
      children: [
        { 
          index: true,
          element: <HomePage />
        },
        {
          path: "DevilFruit/:id", 
          element: <DevilFruitPage />
        },
        {
          path: "search", 
          element: <SearchPage />
        },
      ]
    },
    {
      path: "/EditDevilFruitpage/:id", 
      element: 
      <ProtectedRoute>
        <DevilFruitProvider>
          <EditDevilFruitPage />
        </DevilFruitProvider>
      </ProtectedRoute>,
    },
    {
      path: "/RegisterDevilFruitPage", 
      element:
      <ProtectedRoute>
        <DevilFruitProvider>
          <RegisterDevilFruitpage />
        </DevilFruitProvider>
      </ProtectedRoute>,
    },
]);

export const AppRouterProvider: FC<Record<string, never>> = () => <RouterProvider router={router} />;
