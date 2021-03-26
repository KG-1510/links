import React, { useEffect, useState } from "react";
import { parseCookies } from "nookies";

export const AuthContext = React.createContext({
  isAuth: false,
  setIsAuth: (_isAuth: boolean) => {},
});

const AuthContextProvider: React.FC = ({ children }): React.ReactElement => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  useEffect(() => {
    const { authToken } = parseCookies();
    if (!authToken) {
      setIsAuth(false);
      localStorage.removeItem("isAuth");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
      {process.env.NODE_ENV === "development" && console.log("isAuth", isAuth)}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
