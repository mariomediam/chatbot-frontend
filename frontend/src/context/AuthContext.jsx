import { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import dayjs from "dayjs";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  
  let [userName, setUserName] = useState(() =>
    localStorage.getItem("tupaTokens")
      ? jwtDecode(
          JSON.parse(localStorage.getItem("tupaTokens")).access
        ).user_id.trim()
      : ""
  );
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("tupaTokens")
      ? JSON.parse(localStorage.getItem("tupaTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("tupaTokens")
      ? jwtDecode(localStorage.getItem("tupaTokens"))
      : null
  );
  let [loading, setLoading] = useState(false);
  

  const setAuthContextLogin = async (pUserName, pAuthTokens, pUser = "NO se que se envia") => {
    await setUserName(pUserName.trim());
    setAuthTokens(pAuthTokens);
    setUser(pUser);
  };

  let tokenEsValido = () => {
    let valido = false;

    if (localStorage.getItem("tupaTokens")) {
      let authTokens = JSON.parse(localStorage.getItem("tupaTokens"));
      let authTokensDecode = jwtDecode(authTokens.access);
      const isExpired =
        dayjs.unix(authTokensDecode.exp).diff(dayjs()) - authTokens.diffTime <
        1;
      if (!isExpired) {
        valido = true;
      }
    }

    return valido;
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("tupaTokens");        
  };

  

  let contextData = {
    userName: userName,
    setUserName: setUserName,
    authTokens: authTokens,
    setAuthTokens: setAuthTokens,
    user: user,
    setUser: setUser,
    loading: loading,
    setLoading: setLoading,
    tokenEsValido: tokenEsValido,
    logoutUser: logoutUser,
    setAuthContextLogin: setAuthContextLogin,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
