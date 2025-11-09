import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                loader: ()=> fetch('http://localhost:3000/featuredFoods'),
                Component: Home
            },
            {
                path: '/availableFoods',
                loader: ()=> fetch('http://localhost:3000/allfoods'),
                Component: AvailableFoods
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])

export default router