'use client'

import React, {useState, useEffect} from 'react'

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("");
    const [mounted, setMounted] = useState(false);
    const [themes, setThemes] = useState([{
      name: "Default",
      foreground: "#000000",
      background: "#ffffff"
    }])

  // Load saved tab from localStorage on component mount

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
    setMounted(true);
    const savedThemes = localStorage.getItem("themes");
    if (savedThemes) {
      setThemes(JSON.parse(savedThemes));
    }
  }, []);

  useEffect(() => {
    // Set data-theme attribute for CSS
    document.documentElement.setAttribute('data-theme', theme);

    // Suche nach Custom Theme und setze CSS-Variablen
    const customTheme = themes.find(t => t.name === theme);
    if (customTheme) {
      document.documentElement.style.setProperty('--background', customTheme.background);
      document.documentElement.style.setProperty('--foreground', customTheme.foreground);
    } else {
      // Setze auf Standardwerte zurück
      document.documentElement.style.removeProperty('--background');
      document.documentElement.style.removeProperty('--foreground');
    }
  }, [theme, themes]);
  // Theme löschen
  const deleteTheme = (name) => {
    const filtered = themes.filter(t => t.name !== name);
    setThemes(filtered);
    localStorage.setItem("themes", JSON.stringify(filtered));
    // Falls das aktuelle Theme gelöscht wurde, auf Default zurücksetzen
    if (theme === name) {
      setTheme("Default");
      localStorage.setItem("theme", "Default");
    }
  };

  const toggleTheme = (e) => {
    setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  };

  return (
    <div>
      <select className="fixed top-2 right-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-2 rounded z-20 overflow-y-auto" onChange={toggleTheme} value={theme}>
        {themes?.map((theme, index) => (
          <option key={index} value={theme.name}>{theme.name}</option>
        ))}
      </select>
      <ul className="fixed top-12 right-2 bg-white dark:bg-gray-900 p-2 rounded z-20">
        {themes?.map((theme, index) => (
          <li key={index} className="flex items-center justify-between">
            <span>{theme.name}</span>
            {theme.name !== "Default" && (
              <button onClick={() => deleteTheme(theme.name)} className="ml-2 text-red-500">Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThemeSwitcher