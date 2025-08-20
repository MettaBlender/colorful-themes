'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [themes, setThemes] = useState([{
    id: 0,
    name: "Default",
    foreground: "#000000",
    foregroundSecondary: "#6B7280",
    foregroundTertiary: "#9CA3AF",
    background: "#ffffff",
    backgroundSecondary: "#F3F4F6",
    backgroundTertiary: "#E5E7EB",
    buttonBackground: "#00C4FF",
    buttonHover: "#FF4E88",
    buttonText: "#ffffff",
    linkColor: "#00C4FF",
    linkClickedColor: "#FF4E88",
    accentPrimary: "#00C4FF",
    accentSecondary: "#FF99BB",
    accentTertiary: "#FF4E88",
    accentQuaternary: "#66E0FF",
    focusRing: "#FF4E88",
    hover: "#FF4E88",
    error: "#EF4444",
    warning: "#F59E0B",
    success: "#10B981",
    borderPrimary: "#D1D5DB",
    borderSecondary: "#E5E7EB"
  }])

  const [colors, setColors] = useState({
    foreground: "#000000",
    foregroundSecondary: "#6B7280",
    foregroundTertiary: "#9CA3AF",
    background: "#ffffff",
    backgroundSecondary: "#F3F4F6",
    backgroundTertiary: "#E5E7EB",
    buttonBackground: "#00C4FF",
    buttonHover: "#FF4E88",
    buttonText: "#ffffff",
    linkColor: "#00C4FF",
    linkClickedColor: "#FF4E88",
    accentPrimary: "#00C4FF",
    accentSecondary: "#FF99BB",
    accentTertiary: "#FF4E88",
    accentQuaternary: "#66E0FF",
    focusRing: "#FF4E88",
    hover: "#FF4E88",
    error: "#EF4444",
    warning: "#F59E0B",
    success: "#10B981",
    borderPrimary: "#D1D5DB",
    borderSecondary: "#E5E7EB"
  })

  const [warningOpen, setWarningOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [openStates, setOpenStates] = useState({});

  useEffect(() => {
    // Load saved colors from localStorage
    const savedThemes = localStorage.getItem("themes");
    console.log("themes", savedThemes);
    if (savedThemes) {
      const parsedThemes = JSON.parse(savedThemes);
      // Ensure all themes have an id
      const themesWithIds = parsedThemes.map((theme, index) => ({
        ...theme,
        id: theme.id || index
      }));
      setThemes(themesWithIds);
    }
  }, []);

  const saveTheme = (e) => {
    e.preventDefault();

    if (editId !== null) {
      // Edit existing theme
      const updatedThemes = themes.map(theme =>
        theme.id === editId
          ? { ...theme, name: e.target.name.value, ...colors }
          : theme
      );
      setThemes(updatedThemes);
      localStorage.setItem("themes", JSON.stringify(updatedThemes));
      setEditId(null);
      e.target.name.value = "";
    } else {
      // Create new theme
      const newTheme = {
        id: Date.now(),
        name: e.target.name.value,
        ...colors
      };
      const updatedThemes = [...themes, newTheme];
      setThemes(updatedThemes);
      localStorage.setItem("themes", JSON.stringify(updatedThemes));
      e.target.name.value = "";
    }

    // Reset form
    setColors({
      foreground: "#000000",
      foregroundSecondary: "#6B7280",
      foregroundTertiary: "#9CA3AF",
      background: "#ffffff",
      backgroundSecondary: "#F3F4F6",
      backgroundTertiary: "#E5E7EB",
      buttonBackground: "#00C4FF",
      buttonHover: "#FF4E88",
      buttonText: "#ffffff",
      linkColor: "#00C4FF",
      linkClickedColor: "#FF4E88",
      accentPrimary: "#00C4FF",
      accentSecondary: "#FF99BB",
      accentTertiary: "#FF4E88",
      accentQuaternary: "#66E0FF",
      focusRing: "#FF4E88",
      hover: "#FF4E88",
      error: "#EF4444",
      warning: "#F59E0B",
      success: "#10B981",
      borderPrimary: "#D1D5DB",
      borderSecondary: "#E5E7EB"
    });
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

  // Edit theme functionality
  const [editId, setEditId] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const openEdit = (theme) => {
    setEditId(theme.id);
    setColors({
      foreground: theme.foreground || "#000000",
      background: theme.background || "#ffffff",
      foregroundSecondary: theme.foregroundSecondary || "#6B7280",
      backgroundSecondary: theme.backgroundSecondary || "#F3F4F6",
      foregroundTertiary: theme.foregroundTertiary || "#9CA3AF",
      backgroundTertiary: theme.backgroundTertiary || "#E5E7EB",
      buttonBackground: theme.buttonBackground || "#00C4FF",
      buttonHover: theme.buttonHover || "#FF4E88",
      buttonText: theme.buttonText || "#ffffff",
      linkColor: theme.linkColor || "#00C4FF",
      linkClickedColor: theme.linkClickedColor || "#FF4E88",
      accentPrimary: theme.accentPrimary || "#00C4FF",
      accentSecondary: theme.accentSecondary || "#FF99BB",
      accentTertiary: theme.accentTertiary || "#FF4E88",
      accentQuaternary: theme.accentQuaternary || "#66E0FF",
      focusRing: theme.focusRing || "#FF4E88",
      hover: theme.hover || "#FF4E88",
      error: theme.error || "#EF4444",
      warning: theme.warning || "#F59E0B",
      success: theme.success || "#10B981",
      borderPrimary: theme.borderPrimary || "#D1D5DB",
      borderSecondary: theme.borderSecondary || "#E5E7EB"
    });
    // Set the name input value via form field
    const nameInput = document.querySelector('input[name="name"]');
    if (nameInput) {
      nameInput.value = theme.name;
    }
  };

  const toggleOpen = (themeId) => {
    setOpenStates((prev) => ({
      ...prev,
      [themeId]: !prev[themeId], // Umschalten des Zustands für die gegebene ID
    }));
  };

  return (
    <div className='bg-gradient-to-t from-[#00C4FF] via-[#FF4E88] to-[#FF4E88] backdrop-blur-xs w-full'>
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
        <div className='relative flex flex-col justify-between px-5 gap-5'>
          <div className='flex flex-wrap px-4 gap-3 py-4 overflow-y-auto w-full bg-[#00C4FF]/50 rounded-xl'>
            {themes?.map((theme, index) => (
              <div key={theme.id || index} style={{ backgroundColor: theme.background, color: theme.foreground }} className='p-4 rounded flexflex-col justify-between items-center gap-3 w-[32%]'>
                <div className='flex justify-between items-center w-full'>
                  <div>
                    <h2>{theme.name}</h2>
                    <p className='flex items-center'>Foreground: {theme.foreground} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.foreground }} /></p>
                    <p className='flex items-center'>Background: {theme.background} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.background }} /></p>
                    {openStates[theme.id] && (
                      <>
                        <p className='flex items-center'>ForegroundSecondary: {theme.foregroundSecondary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.foregroundSecondary }} /></p>
                        <p className='flex items-center'>BackgroundSecondary: {theme.backgroundSecondary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.backgroundSecondary }} /></p>
                        <p className='flex items-center'>ForegroundTertiary: {theme.foregroundTertiary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.foregroundTertiary }} /></p>
                        <p className='flex items-center'>BackgroundTertiary: {theme.backgroundTertiary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.backgroundTertiary }} /></p>
                        <p className='flex items-center'>Button Background: {theme.buttonBackground} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.buttonBackground }} /></p>
                        <p className='flex items-center'>Button Text: {theme.buttonText} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.buttonText }} /></p>
                        <p className='flex items-center'>Button Hover: {theme.buttonHover} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.buttonHover }} /></p>
                        <p className='flex items-center'>Link: {theme.linkColor} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.linkColor }} /></p>
                        <p className='flex items-center'>Link clicked: {theme.linkClickedColor} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.linkClickedColor }} /></p>
                        <p className='flex items-center'>accent: {theme.accentPrimary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.accentPrimary }} /></p>
                        <p className='flex items-center'>accent Secondary: {theme.accentSecondary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.accentSecondary }} /></p>
                        <p className='flex items-center'>accent Tertiary: {theme.accentTertiary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.accentTertiary }} /></p>
                        <p className='flex items-center'>accent Quaternary: {theme.accentQuaternary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.accentQuaternary }} /></p>
                        <p className='flex items-center'>focus Ring: {theme.focusRing} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.focusRing }} /></p>
                        <p className='flex items-center'>error: {theme.error} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.error }} /></p>
                        <p className='flex items-center'>warning: {theme.warning} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.warning }} /></p>
                        <p className='flex items-center'>success: {theme.success} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.success }} /></p>
                        <p className='flex items-center'>border: {theme.borderPrimary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.borderPrimary }} /></p>
                        <p className='flex items-center'>border Secondary: {theme.borderSecondary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.borderSecondary }} /></p>
                      </>
                    )}
                  </div>
                  <div className='flex gap-3'>
                    <div className='cursor-pointer' onClick={() => openEdit(theme)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brush-icon lucide-brush"><path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/></svg>
                    </div>
                    <div className='cursor-pointer' onClick={() => {setWarningOpen(prev => !prev); setDeleteId(theme.id)}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eraser-icon lucide-eraser"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"/><path d="m5.082 11.09 8.828 8.828"/></svg>
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-center items-end cursor-pointer' onClick={() => toggleOpen(theme.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transform transition-transform duration-300 ${openStates[theme.id] ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-around w-full bg-[#00C4FF]/50 rounded-xl pb-2'>
            <form onSubmit={saveTheme} className='flex justify-center items-center flex-col gap-4'>
              <h2 className='text-2xl font-bold text-[#FF4E88]'>
                {editId !== null ? `Theme bearbeiten` : 'Theme erstellen'}
              </h2>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>theme name</label>
                <input type="text" name="name" className='h-8 w-64 pl-2 bg-[#00C4FF] rounded-md outline-none focus:ring-2 focus:ring-[#FF4E88] text-[#FF4E88]' required/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>foreground color</label>
                <input type="color" name="foreground" value={colors.foreground} onChange={(e) => setColors({...colors, foreground: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>foreground secondary color</label>
                <input type="color" name="foregroundSecondary" value={colors.foregroundSecondary} onChange={(e) => setColors({...colors, foregroundSecondary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>foreground tertiary color</label>
                <input type="color" name="foregroundTertiary" value={colors.foregroundTertiary} onChange={(e) => setColors({...colors, foregroundTertiary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>background color</label>
                <input type="color" name="background" value={colors.background} onChange={(e) => setColors({...colors, background: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>background secondary color</label>
                <input type="color" name="backgroundSecondary" value={colors.backgroundSecondary} onChange={(e) => setColors({...colors, backgroundSecondary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>background tertiary color</label>
                <input type="color" name="backgroundTertiary" value={colors.backgroundTertiary} onChange={(e) => setColors({...colors, backgroundTertiary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>button background color</label>
                <input type="color" name="buttonBackground" value={colors.buttonBackground} onChange={(e) => setColors({...colors, buttonBackground: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>button hover color</label>
                <input type="color" name="buttonHover" value={colors.buttonHover} onChange={(e) => setColors({...colors, buttonHover: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>button text color</label>
                <input type="color" name="buttonText" value={colors.buttonText} onChange={(e) => setColors({...colors, buttonText: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>link color</label>
                <input type="color" name="linkColor" value={colors.linkColor} onChange={(e) => setColors({...colors, linkColor: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>link visited text color</label>
                <input type="color" name="linkClickedColor" value={colors.linkClickedColor} onChange={(e) => setColors({...colors, linkClickedColor: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>accent color</label>
                <input type="color" name="accentPrimary" value={colors.accentPrimary} onChange={(e) => setColors({...colors, accentPrimary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>accent secondary color</label>
                <input type="color" name="accentSecondary" value={colors.accentSecondary} onChange={(e) => setColors({...colors, accentSecondary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>accent tertiary color</label>
                <input type="color" name="accentTertiary" value={colors.accentTertiary} onChange={(e) => setColors({...colors, accentTertiary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>accent quaternary color</label>
                <input type="color" name="accentQuaternary" value={colors.accentQuaternary} onChange={(e) => setColors({...colors, accentQuaternary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>focus ring color</label>
                <input type="color" name="focusRing" value={colors.focusRing} onChange={(e) => setColors({...colors, focusRing: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>error color</label>
                <input type="color" name="error" value={colors.error} onChange={(e) => setColors({...colors, error: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>warning color</label>
                <input type="color" name="warning" value={colors.warning} onChange={(e) => setColors({...colors, warning: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>success color</label>
                <input type="color" name="success" value={colors.success} onChange={(e) => setColors({...colors, success: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>hover color</label>
                <input type="color" name="hover" value={colors.hover} onChange={(e) => setColors({...colors, hover: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>border color</label>
                <input type="color" name="border" value={colors.borderPrimary} onChange={(e) => setColors({...colors, borderPrimary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-[#FF4E88] text-xl font-bold'>border secondary color</label>
                <input type="color" name="borderSecondary" value={colors.borderSecondary} onChange={(e) => setColors({...colors, borderSecondary: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
              </div>
              <div className='flex gap-2'>
                <button type="submit" className='bg-[#00C4FF] hover:bg-[#FF4E88] transition-colors duration-400 ease-in-out text-white px-4 py-2 rounded cursor-pointer'>
                  {editId !== null ? 'Theme aktualisieren' : 'Theme speichern'}
                </button>
                {editId !== null && (
                  <button type="button" onClick={() => {
                    setEditId(null);
                    setColors({
                      foreground: "#000000",
                      background: "#ffffff",
                      buttonBackground: "#00C4FF",
                      buttonHover: "#FF4E88",
                      buttonText: "#ffffff"
                    });
                    document.querySelector('input[name="name"]').value = "";
                  }} className='bg-gray-400 hover:bg-gray-500 transition-colors duration-400 ease-in-out text-white px-4 py-2 rounded cursor-pointer'>
                    Abbrechen
                  </button>
                )}
              </div>
            </form>
            <div className='w-[40%] h-[90%] my-auto'>
              <div className="p-4 rounded-xl h-full w-full flex justify-center items-center" style={{ backgroundColor: colors.background, color: colors.foreground }}>
                <h2 className='text-6xl font-bold'>Preview</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-screen flex-col mt-5" style={{ color: colors.foreground, backgroundColor: colors.background }}>
          <h1 className="text-xl mb-2">Header</h1>
          <p className="text-center">This is a little text, <br /> on multiple lines</p>
          <button
            className="px-4 p-2 my-1 rounded-md"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            style={{
              backgroundColor: isButtonHovered ? colors.buttonHover : colors.buttonBackground,
              color: colors.buttonText,
              transition: 'background-color 0.2s ease'
            }}>
              This is a Button
            </button>
          <Link href="" style={{ color: colors.linkColor }} className="hover:underline">Link</Link>
        </div>
      </div>
    </div>
  )
}

export default page