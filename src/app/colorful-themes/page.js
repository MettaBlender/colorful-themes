'use client'

import ColorCircle from '@/components/colorCircle'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import getContrastRatio, {getWizardColors} from '@/components/wizardFunctions'
import ColorInput from '@/components/colorInput'
import ThemeCard from '@/components/themeCard'

const Page = () => {

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

  const [wizardColors, setWizardColors] = useState({
    foreground: "#000000",
    background: "#ffffff"
  });

  const [warningOpen, setWarningOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [openWizard, setOpenWizard] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [downloadMode, setDownloadMode] = useState('css');
  const [openImport, setOpenImport] = useState(false);
  const [importedTheme, setImportedTheme] = useState("");

  useEffect(() => {
    // Load saved colors from localStorage
    const savedThemes = localStorage.getItem("themes");
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
    setWarningOpen(false);
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

  const handleWizard = (e) => {
    e.preventDefault();
    const newColors = getWizardColors(wizardColors.foreground, wizardColors.background);

    // Create new theme directly without calling saveTheme
    const newTheme = {
      id: Date.now(),
      name: e.target.name.value,
      ...newColors
    };

    const updatedThemes = [...themes, newTheme];
    setThemes(updatedThemes);
    localStorage.setItem("themes", JSON.stringify(updatedThemes));

    // Reset wizard form
    e.target.name.value = "";
    setWizardColors({
      foreground: "#000000",
      background: "#ffffff"
    });
    setOpenWizard(false);
  }

  const handleImport = () => {
    try {
      const theme = JSON.parse(importedTheme);
      setThemes((prevThemes) => [...prevThemes, { id: Date.now(), ...theme }]);
      localStorage.setItem("themes", JSON.stringify([...themes, { id: Date.now(), ...theme }]));
      setImportedTheme("");
      setOpenImport(false);
    } catch (error) {
      console.error("Error importing theme:", error);
    }
  }

  const code = () => {
    const theme = themes.find(theme => theme.id === deleteId);
    if (!theme) return "Theme not found";
    if (downloadMode === "json") {
      return JSON.stringify(theme, null, 2);
    } else if (downloadMode === "tailwind") {
      return `:root {
  --foreground: ${theme.foreground};
  --foreground-secondary: ${theme.foregroundSecondary};
  --foreground-tertiary: ${theme.foregroundTertiary};
  --background: ${theme.background};
  --background-secondary: ${theme.backgroundSecondary};
  --background-tertiary: ${theme.backgroundTertiary};
  --button-background: ${theme.buttonBackground};
  --button-hover: ${theme.buttonHover};
  --button-text: ${theme.buttonText};
  --link-color: ${theme.linkColor};
  --link-clicked-color: ${theme.linkClickedColor};
  --accent-primary: ${theme.accentPrimary};
  --accent-secondary: ${theme.accentSecondary};
  --accent-tertiary: ${theme.accentTertiary};
  --accent-quaternary: ${theme.accentQuaternary};
  --focus-ring: ${theme.focusRing};
  --hover: ${theme.hover};
  --error: ${theme.error};
  --warning: ${theme.warning};
  --success: ${theme.success};
  --border-primary: ${theme.borderPrimary};
  --border-secondary: ${theme.borderSecondary};
}

@theme {
  --color-background: ${theme.background};
  --color-foreground: ${theme.foreground};
  --color-background-secondary: ${theme.backgroundSecondary};
  --color-foreground-secondary: ${theme.foregroundSecondary};
  --color-background-tertiary: ${theme.backgroundTertiary};
  --color-foreground-tertiary: ${theme.foregroundTertiary};
  --color-button-background: ${theme.buttonBackground};
  --color-button-hover: ${theme.buttonHover};
  --color-button-text: ${theme.buttonText};
  --color-link: ${theme.linkColor};
  --color-link-clicked: ${theme.linkClickedColor};
  --color-hover: ${theme.hover};
  --color-error: ${theme.error};
  --color-warning: ${theme.warning};
  --color-success: ${theme.success};
  --color-border: ${theme.border};
  --color-border-secondary: ${theme.borderSecondary};
  --color-accent: ${theme.accent};
  --color-accent-secondary: ${theme.accentSecondary};
  --color-accent-tertiary: ${theme.accentTertiary};
  --color-accent-quaternary: ${theme.accentQuaternary};
  --color-focus-ring: ${theme.focusRing};
}
`;
    } else {
    return `:root {
  --foreground: ${theme.foreground};
  --foreground-secondary: ${theme.foregroundSecondary};
  --foreground-tertiary: ${theme.foregroundTertiary};
  --background: ${theme.background};
  --background-secondary: ${theme.backgroundSecondary};
  --background-tertiary: ${theme.backgroundTertiary};
  --button-background: ${theme.buttonBackground};
  --button-hover: ${theme.buttonHover};
  --button-text: ${theme.buttonText};
  --link-color: ${theme.linkColor};
  --link-clicked-color: ${theme.linkClickedColor};
  --accent-primary: ${theme.accentPrimary};
  --accent-secondary: ${theme.accentSecondary};
  --accent-tertiary: ${theme.accentTertiary};
  --accent-quaternary: ${theme.accentQuaternary};
  --focus-ring: ${theme.focusRing};
  --hover: ${theme.hover};
  --error: ${theme.error};
  --warning: ${theme.warning};
  --success: ${theme.success};
  --border-primary: ${theme.borderPrimary};
  --border-secondary: ${theme.borderSecondary};
}`;
    }

  }

  return (
    <>
      {warningOpen && <div className='fixed w-screen h-screen backdrop-blur-xs flex justify-center items-center z-20' onClick={() => setWarningOpen(false)}>
        <div className='w-[40%] h-[30%] rounded-2xl p-4 bg-error flex justify-center items-center flex-col gap-6' onClick={(e) => e.stopPropagation()}>
          <p className='text-3xl'>Do you want to delete this theme?</p>
          <button className='transition-colors duration-400 ease-in-out px-4 py-2 rounded cursor-pointer' onClick={() => deleteTheme(deleteId)}>Delete</button>
        </div>
      </div>}
      {openWizard && <div className='fixed w-screen h-screen backdrop-blur-xs flex justify-center items-center z-20' onClick={() => setOpenWizard(false)}>
        <div className='w-[40%] h-[50%] rounded-2xl p-4 bg-background-secondary ring-2 ring-background flex justify-center items-center flex-col gap-6' onClick={(e) => e.stopPropagation()}>
          <div>
            <h1 className='text-3xl'>Theme Wizard 🧙‍♂️</h1>
            <p>This wizard helps you create a nice theme. Choose a foreground and a background color and the 🧙‍♂️ will create the other colors for you!</p>
          </div>
          <div className='w-full flex'>
            <form className='pl-4 flex flex-col gap-3 mt-2 w-1/2' onSubmit={handleWizard}>
              <div className='flex items-center gap-3'>
                <label className='text-xl font-bold'>theme name</label>
                <input type="text" name="name" className='h-8 w-32 pl-2 rounded-md outline-none ring ring-focus-ring' required/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-xl font-bold'>foreground color</label>
                <input type="color" name="foreground" value={wizardColors.foreground} onChange={(e) => setWizardColors({...wizardColors, foreground: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]' onClick={(e) => e.stopPropagation()}/>
              </div>
              <div className='flex items-center gap-3'>
                <label className='text-xl font-bold'>background color</label>
                <input type="color" name="background" value={wizardColors.background} onChange={(e) => setWizardColors({...wizardColors, background: e.target.value})} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]' onClick={(e) => e.stopPropagation()}/>
              </div>
              <button className='transition-colors duration-400 ease-in-out px-4 py-2 rounded cursor-pointer'>Create Theme</button>
            </form>
            <div className='w-1/2 h-full flex flex-col gap-2 justify-center items-center'>
              <div className='flex'>
                <div className='w-32 h-32 rounded-lg rounded-r-none' style={{ backgroundColor: wizardColors.background }} />
                <div className='w-32 h-32 rounded-lg rounded-l-none' style={{ backgroundColor: wizardColors.foreground }} />
              </div>
              <p>Kontrast: {getContrastRatio(wizardColors.foreground, wizardColors.background).toFixed(1)} : 1</p>
            </div>
          </div>
        </div>
      </div>}
      {downloadOpen && <div className='fixed w-screen h-screen backdrop-blur-xs flex justify-center items-center z-20' onClick={() => setDownloadOpen(false)}>
        <div className='w-[40%] min-h-[30%] max-h-[70%] overflow-y-auto rounded-2xl p-4 bg-background-secondary text-white flex justify-start items-center flex-col gap-6' onClick={(e) => e.stopPropagation()}>
          <p className='text-3xl'>Download the theme</p>
          <select className='bg-background text-foreground px-2 py-1 rounded-md' value={downloadMode} onChange={(e) => setDownloadMode(e.target.value)}>
            <option value="css">CSS Variables</option>
            <option value="tailwind">Tailwind Theme</option>
            <option value="json">JSON</option>
          </select>
          <div className='cursor-pointer bg-background-tertiary px-2 py-1 rounded-md' onClick={() => navigator.clipboard.writeText(code())}>
            Kopieren
          </div>
          <pre>
            {code()}
          </pre>
        </div>
      </div>}
      {openImport && <div className='fixed w-screen h-screen backdrop-blur-xs flex justify-center items-center z-20' onClick={() => setOpenImport(false)}>
        <div className='w-[40%] min-h-[30%] max-h-[70%] overflow-y-auto rounded-2xl p-4 bg-background-secondary text-white flex justify-start items-center flex-col gap-6' onClick={(e) => e.stopPropagation()}>
          <p className='text-3xl'>Import a theme</p>
          <textarea className='bg-background text-foreground px-2 py-1 rounded-md w-full h-[40dvh]' value={importedTheme} onChange={(e) => setImportedTheme(e.target.value)} />
          <div className='cursor-pointer bg-background-tertiary px-2 py-1 rounded-md' onClick={handleImport}>
            Import
          </div>
        </div>
      </div>}
      <div className='relative bg-gradient-to-b from-background via-background-secondary to-background-tertiary backdrop-blur-xs w-full'>
        <span onClick={goBack} className='font-bold text-4xl fixed left-6 top-4 cursor-pointer z-30'>&larr;</span>
        <div className='relative z-10 w-full h-full'>
          <h1 className='text-center w-full text-6xl mb-6 mt-10 md:mt-0 pt-2 font-bold text-foreground'>Colorful themes manager</h1>
          <div className='relative flex flex-col justify-between px-0 md:px-5 gap-5'>
            <div className='flex flex-col md:flex-row flex-wrap px-4 gap-3 py-4 overflow-y-auto w-full bg-background-secondary/50 rounded-xl'>
              {themes?.map((theme, index) => (
                <ThemeCard key={theme.id || index} theme={theme} openEdit={openEdit} setWarningOpen={setWarningOpen} setDownloadOpen={setDownloadOpen} setDeleteId={setDeleteId} />
              ))}
            </div>
            <div className='flex flex-col md:flex-row justify-around w-full bg-background-secondary/50 rounded-xl pb-2 px-4 md:px-0'>
              <form onSubmit={saveTheme} className='flex justify-center items-center flex-col gap-4'>
                <h2 className='text-2xl font-bold text-foreground'>
                  {editId !== null ? `Theme bearbeiten` : 'Theme erstellen'}
                </h2>
                <div className='flex flex-col md:flex-row gap-3'>
                  <button type='button' className='px-4 p-2 my-1 rounded-md transition-colors duration-300 ease-in-out font-bold text-xl cursor-pointer' onClick={() => setOpenWizard(true)}>
                    Theme Wizard
                  </button>
                  <button type='button' className='px-4 p-2 my-1 rounded-md transition-colors duration-300 ease-in-out font-bold text-xl cursor-pointer' onClick={() => setOpenImport(true)}>
                    Theme Import
                  </button>
                </div>
                <div className='flex items-center justify-between gap-3 w-full md:w-[30dvw]'>
                  <label className='text-xl font-bold'>theme name</label>
                  <input type="text" name="name" className='h-8 w-32 md:w-64 pl-2 rounded-md outline-none ring ring-focus-ring' required/>
                </div>
                {Object.entries(colors)?.map(([key, color], index) => (
                  <ColorInput key={index} label={key} value={color} onChange={(e) => setColors({...colors, [key]: e.target.value})} />
                ))}

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
              <div className='w-full md:w-[40%] h-[90%] my-auto'>
                <div className="p-4 rounded-xl h-full w-full flex justify-center items-center my-3" style={{ backgroundColor: colors.background, color: colors.foreground }}>
                  <h2 className='text-6xl font-bold'>Preview</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mx-auto md:mx-0'>
                  <ColorCircle colors={[colors.foreground, colors.foregroundSecondary, colors.foregroundTertiary]} segments={3} title={"Foreground"}/>
                  <ColorCircle colors={[colors.background, colors.backgroundSecondary, colors.backgroundTertiary]} segments={3} title={"Background"}/>
                  <ColorCircle colors={[colors.error, colors.warning, colors.success]} segments={3} title={"Status"}/>
                  <ColorCircle colors={[colors.accentPrimary, colors.accentSecondary, colors.accentTertiary, colors.accentQuaternary]} segments={4} title={"Accent"}/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-screen flex-col mt-5" style={{ color: colors.foreground, backgroundColor: colors.background }}>
            <h1 className="text-xl mb-2">Header</h1>
            <p className="text-center">This is a little text, <br /> on multiple lines</p>
            <div className='flex gap-2'>
              <div className='w-24 h-8 rounded-md px-2 py-1' style={{backgroundColor: colors.error}}>Error</div>
              <div className='w-24 h-8 rounded-md px-2 py-1' style={{backgroundColor: colors.warning}}>Warning</div>
              <div className='w-24 h-8 rounded-md px-2 py-1' style={{backgroundColor: colors.success}}>Success</div>
            </div>
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
            <div className="flex flex-wrap mt-1 w-1/2 border border-white border-x-0 justify-around gap-1">
              {Object.entries(colors).map(([key, color], index) => (
                <div key={index} className="w-[8%] h-auto aspect-square ring ring-white group" style={{ backgroundColor: color }}>
                  <div className="absolute px-2 py-1 rounded-sm hidden group-hover:block" style={{ backgroundColor: colors.background, color: colors.foreground }}>{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page