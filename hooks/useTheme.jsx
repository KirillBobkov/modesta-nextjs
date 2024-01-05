import React, { useCallback, useEffect, useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState("light");
  
    useEffect(() => {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

      if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute("theme", "dark");
        setTheme("dark");
      } else {
        if (document.documentElement.hasAttribute("theme")) {
          document.documentElement.removeAttribute("theme");
        }
        setTheme("light");
      }
    }, [theme]);
  
    const changeTheme = useCallback(() => {
      if (theme === "light") {
        setTheme("dark");
      }
      if (theme === "dark") {
        setTheme("light");
      }
    }, []);
  
    return { theme, changeTheme };
  }
  