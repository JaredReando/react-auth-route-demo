import React from "react";
import { Consumer as AuthConsumer, Permission } from "../context/auth.context";
import { getAuth } from "../context/selectors/auth.selectors";
import { setAuthPermission } from "../context/mutators/auth.mutators";

import { Container, Toggle } from "./portal.styles";

const Portal = () => {
  return (
    <AuthConsumer select={[getAuth]}>
      {(permitted: Permission) => (
        <Container>
          <h1>Routing Portal</h1>
          <h4>ACCESS: {permitted ? "GRANTED" : "DENIED"}</h4>
          <Toggle onClick={() => setAuthPermission(!permitted)}>
            Toggle Access
          </Toggle>
        </Container>
      )}
    </AuthConsumer>
  );
};

export default Portal;
