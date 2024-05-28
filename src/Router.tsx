import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "@pages/SignInPage";
import SignUpPage from "@pages/SignUpPage"

const router = createBrowserRouter([
    {
        path : "/",
        element : <Navigate to="/signin" replace/> 
    },
    {
        path : "/signin",
        element : <SignInPage />
    },
    {
        path : "/signup",
        element : <SignUpPage />
    }
])

export default function Router(){
    return <RouterProvider router={router} />
}