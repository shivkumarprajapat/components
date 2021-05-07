import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Services from "./components/Pages/Services/Services";
import Service from "./components/Pages/Service/Service";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/services/:id" component={Service} />
        </Switch>
    );
};

export default Routes;