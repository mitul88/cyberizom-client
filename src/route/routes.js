import { createBrowserRouter } from "react-router-dom";
import RootPage from "../page/Root";
import HomePage from "../page/Home";
import AccountRoot from "../page/AccountRoot";


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
    },
    {
        path: "/account",
        element: <AccountRoot />,
        errorElement: <p>Errir</p>,
        id:"account-root"
    }
])