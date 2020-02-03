import React from "react";
import { Consumer as AuthConsumer, Permission } from "../context/auth.context";
import { getAuth } from "../context/selectors/auth.selectors";
import { setAuthPermission } from "../context/mutators/auth.mutators";
import { Container, Toggle , StyledLink} from "./portal.styles";

const Portal = () => {
  return (
    <AuthConsumer select={[getAuth]}>
      {(permitted: Permission) => (
        <Container>
          <h1>Routing Portal</h1>
          <h4>ACCESS: {permitted ? "GRANTED" : "DENIED"}</h4>
          <Toggle 
            onClick={() => setAuthPermission(!permitted)}
            background={permitted ? 'lightgreen' : undefined}
          >
            Toggle Access
          </Toggle>
          <StyledLink to="/permitted">Enter</StyledLink>
        </Container>
      )}
    </AuthConsumer>
  );
};

export default Portal;
