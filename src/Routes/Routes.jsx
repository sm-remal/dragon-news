import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage/HomePage";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {
            path: "/",
            Component: HomePage,
        },
        {
            path: "category/:id",
            Component: CategoryNews,
            loader: () => fetch("/news.json")
        }
    ]
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      }
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader: () => fetch("/news.json")
  }
]);

