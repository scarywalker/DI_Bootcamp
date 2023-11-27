import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        {/* Other components here */}
      </div>
    </ThemeProvider>
  );
}

export default App;