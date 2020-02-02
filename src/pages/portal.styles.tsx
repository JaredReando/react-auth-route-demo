import styled from "styled-components";

export const Container = styled.div({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

export const Toggle = styled.button({
  outline: "none",
  border: "none",
  width: "200px",
  height: "40px",
  background: "tomato",

  ":hover": {
    background: "red",
    cursor: "pointer"
  }
});
