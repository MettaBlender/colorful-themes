'use client'

import React, {useState, useEffect} from 'react'

const ThemeSwitcher = ({className}) => {
    const [theme, setTheme] = useState("");
    const [mounted, setMounted] = useState(false);
    const [themes, setThemes] = useState([{
      name: "Default",
      foreground: "#000000",
      background: "#ffffff",
      buttonBackground: "#00C4FF",
    }])

  // Load saved tab from localStorage on component mount


  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
    setMounted(true);
    const savedThemes = localStorage.getItem("themes");
    if (savedThemes) {
      setThemes(JSON.parse(savedThemes));
    }

    // Listener für Änderungen an localStorage (z.B. in anderen Tabs)
    const handleStorage = (event) => {
      if (event.key === "themes") {
        setThemes(event.newValue ? JSON.parse(event.newValue) : [{
          name: "Default",
          foreground: "#000000",
          background: "#ffffff",
          buttonBackground: "#00C4FF",
        }]);
      }
      if (event.key === "theme") {
        setTheme(event.newValue || "Default");
      }
    };
    window.addEventListener("storage", handleStorage);

    // Überwache localStorage mit einem Interval für lokale Änderungen
    const checkLocalStorage = () => {
      const currentThemes = localStorage.getItem("themes");
      const currentTheme = localStorage.getItem("theme");

      if (currentThemes) {
        const parsedThemes = JSON.parse(currentThemes);
        setThemes(prev => {
          if (JSON.stringify(prev) !== JSON.stringify(parsedThemes)) {
            return parsedThemes;
          }
          return prev;
        });
      }

      if (currentTheme && currentTheme !== theme) {
        setTheme(currentTheme);
      }
    };

    const interval = setInterval(checkLocalStorage, 500);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, [theme]);

  useEffect(() => {
    // Set data-theme attribute for CSS
    document.documentElement.setAttribute('data-theme', theme);

    // Suche nach Custom Theme und setze CSS-Variablen
    const customTheme = themes.find(t => t.name === theme);
    if (customTheme) {
      document.documentElement.style.setProperty('--background', customTheme.background);
      document.documentElement.style.setProperty('--foreground', customTheme.foreground);
      document.documentElement.style.setProperty('--button-background', customTheme.buttonBackground);
      document.documentElement.style.setProperty('--button-hover', customTheme.buttonHover);
      document.documentElement.style.setProperty('--button-text', customTheme.buttonText);
      document.documentElement.style.setProperty('--link-color', customTheme.linkColor);
      document.documentElement.style.setProperty('--link-clicked-color', customTheme.linkClickedColor);
    } else {
      // Setze auf Standardwerte zurück
      document.documentElement.style.removeProperty('--background');
      document.documentElement.style.removeProperty('--foreground');
      document.documentElement.style.removeProperty('--button-background');
      document.documentElement.style.removeProperty('--button-hover');
      document.documentElement.style.removeProperty('--button-text');
      document.documentElement.style.removeProperty('--link-color');
      document.documentElement.style.removeProperty('--link-clicked-color');
    }
  }, [theme, themes]);

  const toggleTheme = (e) => {
    setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  };

  return (
    <select className={`fixed top-2 right-2 bg-[#00C4FF] p-2 rounded z-20 overflow-y-auto h-10 text-[#FF4E88] ${className}`} onChange={toggleTheme} value={theme}>
      {themes?.map((theme, index) => (
        <option key={index} style={{ backgroundColor: theme.background, color: theme.foreground }} value={theme.name}>{theme.name}</option>
      ))}
    </select>
  )
}

export default ThemeSwitcher