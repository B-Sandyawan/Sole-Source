/**
 * ThemeContext.jsx — Dark/Light mode context provider.
 *
 * Reads initial theme from localStorage, falls back to system preference.
 * Toggles "dark" class on <html> element for Tailwind dark mode.
 */

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage first
        const saved = localStorage.getItem("sole-source-theme");
        if (saved) return saved === "dark";
        // Fall back to system preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("sole-source-theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("sole-source-theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
