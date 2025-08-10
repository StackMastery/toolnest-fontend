import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, []);

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setisLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
