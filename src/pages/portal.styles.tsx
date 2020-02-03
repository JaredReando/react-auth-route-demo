import styled from "styled-components";
import { Link } from "react-router-dom";

const font = {
  fontFamily: "Helvetica, sans-serif",
  fontSize: "1em"
};

export const Container = styled.div({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

export const Toggle = styled.button<{ background?: string }>(
  ({ background }) => ({
    ...font,
    outline: "none",
    border: "none",
    borderRadius: "5px",
    width: "200px",
    height: "40px",
    background: background ? background : "tomato",

    ":hover": {
      background: background ? "green" : "red",
      cursor: "pointer"
    }
  })
);

export const StyledLink = styled(Link)({
  ...font,
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  color: "black",
  outline: "none",
  borderRadius: "5px",
  width: "200px",
  height: "40px",
  transition: "all 200ms linear",

  ":hover": {
    border: "1px solid blue",
    color: "blue",
    cursor: "pointer"
  }
});
