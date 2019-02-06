import React from "react";
import { Switch, Route } from "react-router-dom";
import ClubInformation from "./one-level/ClubInformation";
import Clubs from "./one-level/Clubs";

const Teams = () => (
        <Switch>
            <Route exact path="/teams" component={ClubInformation} />
            <Route path="/teams/:position" component={Clubs} />
        </Switch>
)

export default Teams;
