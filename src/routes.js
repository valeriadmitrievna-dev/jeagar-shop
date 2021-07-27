import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home/index';

export const useRoutes = (isAuth) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/sales" exact>
        sales page
      </Route>

      <Route path="/dashboard" exact>
        dashboard
      </Route>
      <Route path="/support" exact>
        support page
      </Route>
      <Route path="/notifications" exact>
        notifications page
      </Route>

      <Route path="/settings" exact>
        settings page
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
