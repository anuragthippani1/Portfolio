"use client";

import * as React from "react";

const ThemeContext = React.createContext(undefined);

export function ThemeProvider({ children, defaultTheme = "dark", ...props }) {
  const [theme, setTheme] = React.useState(defaultTheme);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
    }
  }, []);

  React.useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: (newTheme) => {
        setTheme(newTheme);
      },
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};






