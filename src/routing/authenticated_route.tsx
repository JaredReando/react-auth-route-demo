import React from "react";
import { Redirect, Route } from "react-router";
import { Consumer as AuthConsumer, Permission } from "../context/auth.context";
import { getAuth } from "../context/selectors/auth.selectors";

interface RouteProps {
  path: string | string[];
  component: React.ComponentType<any>;
  exact?: boolean;
}

const AuthenticatedRoute: React.FC<RouteProps> = ({
  component: Comp,
  ...props
}) => {
  return (
    <AuthConsumer select={[getAuth]}>
      {(permitted: Permission) => {
        console.log("authRoute permission: ", permitted);
        return (
          <Route
            {...props}
            component={(props: any) => {
              return (
                <>
                  {permitted ? (
                    <>
                      <Comp {...props} />
                    </>
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/not_permitted",
                        state: { from: props.location }
                      }}
                    />
                  )}
                </>
              );
            }}
          />
        );
      }}
    </AuthConsumer>
  );
};

export default AuthenticatedRoute;
