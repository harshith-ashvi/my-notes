import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";

const RouteComp = (props) => {
    return (
        <>
            <Route path="/" component={Home}/>
        </>
    )
}

export default RouteComp