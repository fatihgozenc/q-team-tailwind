import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "../routes";

export default function Pages() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return useRoutes(routes);
}

