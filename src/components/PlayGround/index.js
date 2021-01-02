import React from "react";
import { Switch, Route } from "react-router-dom";

import CovidCases from "../CovidCases/index";
import Menu from "./menu";

function PlayGround() {
  return (
    <Switch>
      <Route path={`/playground/covid`}>
        <CovidCases />
      </Route>
      <Route path={`/playground`}>
        <Menu />
      </Route>
    </Switch>
  );
}

export default PlayGround;
