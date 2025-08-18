'use client'

import React, { useEffect, useState } from 'react'

const page = () => {

  const [themes, setThemes] = useState([{
    name: "Default",
    foreground: "#000000",
    background: "#ffffff"
  }])

  const [foreground, setForeground] = useState("#000000");
  const [background, setBackground] = useState("#ffffff");

  const [warningOpen, setWarningOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    // Load saved colors from localStorage
    const savedThemes = localStorage.getItem("themes");
    console.log("themes", savedThemes);
    if (savedThemes) {
      setThemes(JSON.parse(savedThemes));
    }
  }, []);

  const saveTheme = (e) => {
    e.preventDefault();
    const newTheme = {
      id: Date.now(),
      name: e.target.name.value,
      foreground: foreground,
      background: background
    };
    const updatedThemes = [...themes, newTheme];
    setThemes(updatedThemes);
    localStorage.setItem("themes", JSON.stringify(updatedThemes));
  }

  const deleteTheme = (id) => {
    const updatedThemes = themes.filter(theme => theme.id !== id);
    setThemes(updatedThemes);
    localStorage.setItem("themes", JSON.stringify(updatedThemes));
  }

  return (
    <div className='bg-gradient-to-t from-[#00C4FF] to-[#FF4E88] backdrop-blur-xs w-full h-screen'>
      <h1 className='text-center w-full text-4xl mb-3 pt-2 text-white font-bold'>Colorful themes manager</h1>
      {warningOpen && <div className='fixed w-screen h-screen backdrop-blur-xs z-10 flex justify-center items-center' onClick={() => setWarningOpen(false)}>
        <div className='w-[40%] h-[30%] rounded-2xl border border-red-500 p-4 bg-red-800 text-white'>
          <p>Do you want to delete this theme?</p>
          <button onClick={() => deleteTheme(deleteId)}>Delete</button>
        </div>
      </div>}
      <div className='relative flex justify-around'>
        <div className='flex flex-col px-4 gap-2 py-4 overflow-y-auto'>
          {themes?.map((theme, index) => (
            <div key={index} style={{ backgroundColor: theme.background, color: theme.foreground }} className='p-4 rounded flex items-center gap-3'>
              <div>
                <h2>{theme.name}</h2>
                <p>Foreground: {theme.foreground}</p>
                <p>Background: {theme.background}</p>
              </div>
              <div className='cursor-pointer' onClick={() => {setWarningOpen(prev => !prev); setDeleteId(theme.id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eraser-icon lucide-eraser"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"/><path d="m5.082 11.09 8.828 8.828"/></svg>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={saveTheme} className='flex justify-center items-center flex-col gap-4'>
          <h1>Titel</h1>
          <div className='flex items-center gap-3'>
            <label>theme name</label>
            <input type="text" name="name" className='h-8 w-16' required/>
          </div>
          <div className='flex items-center gap-3'>
            <label>foreground color</label>
            <input type="color" name="foreground" value={foreground} onChange={(e) => setForeground(e.target.value)} className='h-8 w-16'/>
          </div>
          <div className='flex items-center gap-3'>
            <label>background color</label>
            <input type="color" name="background" value={background} onChange={(e) => setBackground(e.target.value)} className='h-8 w-16'/>
          </div>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>Save Theme</button>
        </form>
        <div>
          <div className="p-4 rounded" style={{ backgroundColor: background, color: foreground }}>
            <h2>Preview</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page