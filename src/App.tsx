import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import { router } from "./Routes"

export function App() {
    return (
        <HelmetProvider>
            <Helmet titleTemplate="%s | pizza.shop" />
            <RouterProvider router={router} />
        </HelmetProvider>
    )
}
