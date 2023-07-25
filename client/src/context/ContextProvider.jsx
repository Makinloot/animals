/* eslint-disable react/prop-types */
import { useContext, useState, createContext, useEffect } from "react";

const Context = createContext(null);

const useAppContext = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const initialTheme = localStorage.getItem("theme") === "true";
  const [darkMode, setDarkMode] = useState(initialTheme);

  // change theme of website accordingly
  const changeTheme = () => setDarkMode(!darkMode);

  // Effect to save the theme mode to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode.toString());
  }, [darkMode]);

  const values = {
    changeTheme,
    darkMode,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { ContextProvider, useAppContext };
