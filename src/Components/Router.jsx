import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./Navbar"
import Button from "./Button"
import Header from "./Header"
import Section from "./Section"
import Home from "./Home"




const routers = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />
    },
    {
        path: '/about',
        element: <Button  text='Get Started'/> ,
    },
    {
        path: '/head',
        element: <Header />
    },
])

function Router() {
    return(

        <RouterProvider router={routers}></RouterProvider>
    )
}

export default Router