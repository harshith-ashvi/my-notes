import React from "react";
import { Route } from "react-router-dom";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const RouteComp = (props) => {
    return (
        <>
            <Route path="/" component={Home} exact/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/account" component={Account}/>
        </>
    )
}

export default RouteComp