import React from "react";
import { Switch, Route } from "react-router-dom";
import ClubInformation from "./one-level/ClubInformation";
import Clubs from "./one-level/Clubs";

const Teams = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/clubInformation" component={ClubInformation} />
            <Route path="/clubInformation:position" component={Clubs} />
        </Switch>
    </React.Fragment>
)

export default Teams;
