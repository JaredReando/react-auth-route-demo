import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hello from "../pages/hello";
import Settings from '../pages/settings';
import User from '../pages/user';

const PermittedRouter = () => {
  return (
    <BrowserRouter basename="/permitted">
      <div>
        links
      </div>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/settings" component={Settings} />
        <Route path="/user" component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default PermittedRouter;
