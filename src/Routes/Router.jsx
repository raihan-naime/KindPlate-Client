import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/availableFoods',
                Component: AvailableFoods
            }
        ]
    }
])

export default router