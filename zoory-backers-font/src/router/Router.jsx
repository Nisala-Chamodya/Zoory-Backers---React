import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../component/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/Dashboard/UpdateProfile";
import CartPage from "../pages/shop/CartPage";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/admin/Dashboard";
import Users from "../pages/Dashboard/admin/Users";
import AddMenu from "../pages/Dashboard/admin/AddMenu";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        // element:<PrivateRouter><Menu/></PrivateRouter>,
        element: <Menu />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
    ],
  },
]);

export default router;
