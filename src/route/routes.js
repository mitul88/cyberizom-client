import { createBrowserRouter } from "react-router-dom";
import RootPage from "../page/Root";
import HomePage from "../page/Home";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <p>Error</p>,
        id:"home-root",
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
])