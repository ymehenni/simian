import React from "react";
import { ThemeProvider } from "styled-components";

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const CustomThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    mode: "dark",
  });

  const toggle = () => {
    const mode = themeState.mode === "light" ? `dark` : `light`;
    setThemeState({ mode: mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode,
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
