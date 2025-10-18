import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage/HomePage";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

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
]);

