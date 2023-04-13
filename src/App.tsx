import React, {createContext, useEffect, useState} from 'react';
import {Home} from "./components/pages/home";

interface ThemeContextProps {
    mode: boolean
    toggleMode: () => void
}

export interface StyledComponentProps {
    dark: boolean
}

export const ThemeContext = createContext<ThemeContextProps>({mode: true, toggleMode: () => null})

function App() {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
      setMode(prevMode => !prevMode);
  }

  useEffect(() => {
      if (mode) {
          document.body.style.backgroundColor = '#E0E5EC'
          document.body.style.color = '#212427';
      } else {
          document.body.style.backgroundColor = '#212427'
          document.body.style.color = '#F8F0E3'
      }
  })

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
        <div>
            <Home/>
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
