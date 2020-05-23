import React from "react";
import { useTheme } from "./ThemeContext";
import styled, { withTheme } from "styled-components";
import { backgroundColor, textColor } from "./theme";
import { DayNightToggle } from "./components/DayNightToggle/DayNightToggle";

const AppWrapper = styled.div`
  height: 100vh;
  background-color: ${backgroundColor};
  color: ${textColor};
`;
function App() {
  const themeToggle = useTheme();
  return (
    <AppWrapper className="App">
      <DayNightToggle
        className="darkModeToggle"
        onToggle={() => themeToggle.toggle()}
      />
    </AppWrapper>
  );
}

export default withTheme(App);
