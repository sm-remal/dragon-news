import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage/HomePage";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Spinner from "../components/Spinner/Spinner";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ErrorNews from "../components/ErrorNews/ErrorNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    hydrateFallbackElement: <Spinner></Spinner>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "career",
        Component: Career,
      },
      {
        path: "category/:id",
        errorElement: <ErrorNews></ErrorNews>,
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
  },

]);

