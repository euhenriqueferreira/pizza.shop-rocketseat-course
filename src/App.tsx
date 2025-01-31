import { RouterProvider } from "react-router-dom"
import "./index.css"
import { router } from "./Routes"

export function App() {
    return <RouterProvider router={router} />
}
