import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./user";
import { Container } from "./portal.styles";

const Portal = () => {
  return (
    <Container>
      <h1>You are <span style={{color: 'green'}}>PERMITTED</span></h1>
    </Container>
  );
};

export default Portal;
