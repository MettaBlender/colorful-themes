'use client'

import React from 'react'

const ColorThemesHelp = ({className}) => {

  const openColorThemeManagerHelp = () => {
    console.log("href", window.location.href)
    if (window.location.href.includes('/colorful-themes/docs')) {
      window.history.back();
    } else {
      window.location.href = '/colorful-themes/docs';
    }
  }

  return (
    <div className={`fixed h-10 w-auto aspect-square right-2 bottom-2 z-40 bg-background-secondary hover:bg-background hover:ring hover:ring-background-secondary text-foreground-secondary hover:text-foreground transition-colors rounded-full flex justify-center items-center cursor-pointer ${className}`} onClick={openColorThemeManagerHelp}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-check-icon lucide-book-check"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 9.5 2 2 4-4"/></svg>
    </div>
  )
}

export default ColorThemesHelp