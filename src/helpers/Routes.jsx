import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Teams from "./Teams";
import history from "./history"; // to not get confused with the History component in react-router.

const Routes = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/teams" component={Teams} />
            <Route path="/history" component={history} />
        </Switch>
    </React.Fragment>
);

export default Routes;