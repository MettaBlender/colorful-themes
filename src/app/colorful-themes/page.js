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

  const goBack = () => {
    console.log("href", window.location.href)
    if (window.location.href.includes('/colorful-themes')) {
      window.history.back();
    } else {
      window.location.href = '/colorful-themes';
    }
  }

  return (
    <div className='bg-gradient-to-t from-[#00C4FF] via-[#FF4E88] to-[#FF4E88] backdrop-blur-xs w-full h-screen'>
      <div className='bg-[url(/ctm_bg.png)] w-full h-full bg-cover bg-center bg-no-repeat backdrop-blur-xl opacity-25 absolute inset-0'></div>
      <span onClick={goBack} className='font-bold text-4xl text-[#00C4FF] fixed left-6 top-4 cursor-pointer z-30'>&larr;</span>
      {warningOpen && <div className='fixed w-screen h-screen backdrop-blur-xs flex justify-center items-center z-20' onClick={() => setWarningOpen(false)}>
        <div className='w-[40%] h-[30%] rounded-2xl border border-red-500 p-4 bg-[#FF4E88] text-white flex justify-center items-center flex-col gap-6'>
          <p className='text-3xl'>Do you want to delete this theme?</p>
          <button className='bg-[#00C4FF] hover:bg-[#00C4FF]/50 transition-colors duration-400 ease-in-out text-white px-4 py-2 rounded cursor-pointer' onClick={() => deleteTheme(deleteId)}>Delete</button>
        </div>
      </div>}
      <div className='relative z-10 w-full h-full'>
        <h1 className='text-center w-full text-6xl mb-6 pt-2 font-bold text-[#00C4FF]'>Colorful themes manager</h1>
        <div className='relative flex justify-between px-5 gap-5'>
          <div className='flex flex-wrap px-4 gap-3 py-4 overflow-y-auto w-1/2 bg-[#00C4FF]/50 rounded-xl'>
            {themes?.map((theme, index) => (
              <div key={index} style={{ backgroundColor: theme.background, color: theme.foreground }} className='p-4 rounded flex justify-between items-center gap-3 w-[49%]'>
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
          <div className='flex justify-around w-1/2 bg-[#00C4FF]/50 rounded-xl'>
            <form onSubmit={saveTheme} className='flex justify-center items-center flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>theme name</label>
                <input type="text" name="name" className='h-8 w-64 pl-2 bg-[#00C4FF] rounded-md outline-none focus:ring-2 focus:ring-[#FF4E88] text-[#FF4E88]' required/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>foreground color</label>
                <input type="color" name="foreground" value={foreground} onChange={(e) => setForeground(e.target.value)} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>background color</label>
                <input type="color" name="background" value={background} onChange={(e) => setBackground(e.target.value)} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <button className='bg-[#00C4FF] hover:bg-[#FF4E88] transition-colors duration-400 ease-in-out text-white px-4 py-2 rounded cursor-pointer'>Save Theme</button>
            </form>
            <div className='w-[40%] h-[90%] my-auto'>
              <div className="p-4 rounded-xl h-full w-full flex justify-center items-center" style={{ backgroundColor: background, color: foreground }}>
                <h2 className='text-6xl font-bold'>Preview</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page