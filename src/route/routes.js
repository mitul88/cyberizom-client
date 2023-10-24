import { createBrowserRouter } from "react-router-dom";
import RootPage from "../page/Root";
import HomePage from "../page/Home";
import AccountRoot from "../page/AccountRoot";
import Signin from "../page/account/Signin";
import SignupTypePage from "../page/account/SignupType";
import Leaderboard from "../page/account/Leaderboard";


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
        errorElement: <p>Error</p>,
        id:"account-root",
        children: [
            {
                path: 'signin',
                element: <Signin />
            },
            {
                path:'signup',
                element: <SignupTypePage />
            },
            {
                path:'leaderboard',
                element: <Leaderboard />
            }
        ]
    }
])