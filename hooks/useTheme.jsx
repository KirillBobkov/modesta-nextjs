import { useCallback, useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(undefined);

  useEffect(() => {
    const root = document.documentElement;
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      root.classList.toggle("dark", savedTheme === "dark");
      setTheme(savedTheme);
    } else {
      const newTheme = prefersDarkScheme.matches ? "dark" : "light";
      root.classList.toggle("dark", newTheme === "dark");
      setTheme(newTheme);
    }
  }, []);

  const changeTheme = useCallback(() => {
    const root = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    root.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  }, [theme]);

  return { theme, changeTheme };
}
  