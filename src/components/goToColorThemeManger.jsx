'use client'

import React from 'react'

const GoToColorThemeManger = ({className}) => {

  const openColorThemeManager = () => {
    console.log("href", window.location.href)
    if (window.location.href.includes('app/colorful-themes')) {
      window.history.back();
    } else {
      window.location.href = '/colorful-themes';
    }
  }

  return (
    <div className={`fixed top-2 right-2 bg-background-secondary text-foreground-secondary p-2 rounded z-20 overflow-y-auto h-10 cursor-pointer hover:bg-background hover:ring hover:ring-background-secondary hover:text-foreground transition-colors ${className}`}>
      <svg onClick={openColorThemeManager} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
    </div>
  )
}

export default GoToColorThemeManger