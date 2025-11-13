import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest";
import PrivateRouter from "./PrivateRouter";
import ViewDetails from "../Pages/ViewDetails";
import UpdateFood from "../Pages/UpdateFood";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://kind-server-plate.vercel.app/featuredFoods"),
        Component: Home,
      },
      {
        path: "/availableFoods",
        loader: () => fetch("https://kind-server-plate.vercel.app/allfoods"),
        Component: AvailableFoods,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRouter>
            <AddFood></AddFood>
          </PrivateRouter>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRouter>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-food-request",
        element: (
          <PrivateRouter>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRouter>
        ),
      },
      {
        path: "/food/:id",
        loader: ({ params }) =>
          fetch(`https://kind-server-plate.vercel.app/food/${params.id}`),
        element: (
          <PrivateRouter>
            {" "}
            <ViewDetails></ViewDetails>{" "}
          </PrivateRouter>
        ),
      },
      {
        path: "/update-food/:id",
        loader: ({ params }) =>
          fetch(
            `https://kind-server-plate.vercel.app/update-food/${params.id}`
          ),
        element: (
          <PrivateRouter>
            {" "}
            <UpdateFood></UpdateFood>{" "}
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
