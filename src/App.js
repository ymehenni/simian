import React from 'react';
import { useTheme } from './ThemeContext';
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor, backgroundColor, textColor } from './theme';


const AppWrapper = styled.div`
height: 100vh;
background-color: ${backgroundColor};
color: ${textColor};
`

function App({theme}) {
  const themeToggle = useTheme();
  const Button = styled.button`
    background: ${buttonBackgroundColor};
    color: ${buttonTextColor};
 `;
  return (
    <AppWrapper className="App">
        <Button 
          onClick={() => themeToggle.toggle()}
         >
          { theme.mode === 'dark' 
            ? "Switch to Light Mode" 
            : "Switch to Dark Mode"
          }
        </Button>
    </AppWrapper>
  );
}

export default withTheme(App);
