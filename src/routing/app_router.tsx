import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./authenticated_route";
import PermittedRouter from "./permitted_router";

import Portal from "../pages/portal";
import NotFound404 from "../pages/not_found_404";
import NotPermitted from '../pages/not_permitted';

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <AuthenticatedRoute path="/permitted" component={PermittedRouter} />
        <Route path="/not_permitted" component={NotPermitted}/>
        <Route exact path="/" component={Portal} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
