import Home from "./home";
import Contact from "./contact";
import Layout from "../components/Layout";
import NotFound from "./404";

export default [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
];