import {
  useState,
  useEffect,
  createContext,
  type ReactNode,
  useCallback,
  useContext,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}
const defaultValue: ThemeContextValue = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextValue>(defaultValue);

export const ThemeProvider = function ({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () =>
      (localStorage.getItem("theme") as Theme) ||
      (window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  useEffect(() => {
    console.log(theme);
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "light" : "dark"
    );
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = function () {
  const ctx = useContext(ThemeContext);
  return ctx;
};
