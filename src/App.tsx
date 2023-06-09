import React, {createContext, useEffect, useState} from 'react';
import {Home} from "./components/pages/home";
import {Route, Routes} from "react-router-dom";
import {Attributions} from "./components/pages/attributions";

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
      setMode((prev) => {
          localStorage.setItem("mode", !prev ? "light": "dark");
          return !prev;
      });
  }

  const setColourMode = (mode: boolean) => {
      if (mode) {
          document.body.style.backgroundColor = '#E0E5EC';
          document.body.style.color = '#212427';
      } else {
          document.body.style.backgroundColor = '#212427';
          document.body.style.color = '#F8F0E3';
      }
  }

  useEffect(() => {
      const current = localStorage.getItem("mode");

      if (!current) {
          localStorage.setItem("mode", "light");
          setMode(true);
          return
      }

      setMode(current === "light");
  }, []);

  useEffect(() => {
      setColourMode(mode);
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/attributions'} element={<Attributions />} />
        </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
