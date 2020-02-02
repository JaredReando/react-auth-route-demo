import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./authenticated_route";
import PermittedRouter from "./permitted_router";

import Portal from "../pages/portal";
import notFound404 from "../pages/not_found_404";

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <AuthenticatedRoute path="/permitted" component={PermittedRouter} />
        <Route exact path="/" component={Portal} />
        <Route component={notFound404} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
