import React from "react";
import AppRouter from "./routing/app_router";
import { Provider as AuthProvider } from "./context/auth.context";

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
