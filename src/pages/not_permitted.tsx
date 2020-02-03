import React from "react";
import { StyledLink } from "./portal.styles";
import styled from "styled-components";

const Container = styled.div({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const NotPermitted = () => {
  return (
    <Container>
      <h1>You are not permitted here</h1>
      <StyledLink to="/">Back</StyledLink>
    </Container>
  );
};

export default NotPermitted;
