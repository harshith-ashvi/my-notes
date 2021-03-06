import React from "react";
import { Route, Switch } from "react-router-dom";
import NotesContainer from "./notes/NotesContainer";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";

const RouteComp = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/account" component={Account} />
                <Route path="/notes" component={NotesContainer} />
                <Route component={NotFound} />
            </Switch>
            
        </>
    )
}

export default RouteComp