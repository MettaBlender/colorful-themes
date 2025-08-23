import React, {useState} from 'react'

const ThemeCard = ({theme, openEdit, setWarningOpen, setDownloadOpen, setDeleteId}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: theme.background, color: theme.foreground, height: isOpen ? 'auto' : '8rem' }} className='p-4 rounded flexflex-col justify-between items-center gap-3 w-full md:w-[32%]'>
      <div className='flex justify-between items-center w-full'>
        <div>
          <h2>{theme.name}</h2>
          <span className='flex justify-between items-center'>Foreground: {theme.foreground} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.foreground }} /></span>
          <span className='flex justify-between items-center'>Background: {theme.background} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.background }} /></span>
          {isOpen && (
            <>
              <span className='flex justify-between items-center'>ForegroundSecondary: {theme.foregroundSecondary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.foregroundSecondary }} /></span>
              <span className='flex justify-between items-center'>BackgroundSecondary: {theme.backgroundSecondary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.backgroundSecondary}} /></span>
              <span className='flex justify-between items-center'>ForegroundTertiary: {theme.foregroundTertiary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.foregroundTertiary }} /></span>
              <span className='flex justify-between items-center'>BackgroundTertiary: {theme.backgroundTertiary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.backgroundTertiary }} /></span>
              <span className='flex justify-between items-center'>Button Background: {theme.buttonBackground} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.buttonBackground }} /></span>
              <span className='flex justify-between items-center'>Button Text: {theme.buttonText} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.buttonText }} /></span>
              <span className='flex justify-between items-center'>Button Hover: {theme.buttonHover} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.buttonHover }} /></span>
              <span className='flex justify-between items-center'>Link: {theme.linkColor} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.linkColor }} /></span>
              <span className='flex justify-between items-center'>Link clicked: {theme.linkClickedColor} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.linkClickedColor }} /></span>
              <span className='flex justify-between items-center'>accent: {theme.accentPrimary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.accentPrimary }} /></span>
              <span className='flex justify-between items-center'>accent Secondary: {theme.accentSecondary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.accentSecondary }} /></span>
              <span className='flex justify-between items-center'>accent Tertiary: {theme.accentTertiary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.accentTertiary }} /></span>
              <span className='flex justify-between items-center'>accent Quaternary: {theme.accentQuaternary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.accentQuaternary }} /></span>
              <span className='flex justify-between items-center'>focus Ring: {theme.focusRing} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.focusRing }} /></span>
              <span className='flex justify-between items-center'>error: {theme.error} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.error }} /></span>
              <span className='flex justify-between items-center'>warning: {theme.warning} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.warning }} /></span>
              <span className='flex justify-between items-center'>success: {theme.success} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.success }} /></span>
              <span className='flex justify-between items-center'>border: {theme.borderPrimary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.borderPrimary }} /></span>
              <span className='flex justify-between items-center'>border Secondary: {theme.borderSecondary} <div className='ml-4 w-4 h-auto aspect-square rounded-xs' style={{ backgroundColor: theme.borderSecondary }} /></span>
            </>
          )}
        </div>
        <div className={`flex ${isOpen ? 'flex-col md:flex-row' : 'flex-row'} gap-3`}>
          <div className='cursor-pointer' onClick={() => openEdit(theme)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brush-icon lucide-brush"><path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/></svg>
          </div>
          <div className='cursor-pointer' onClick={() => {setWarningOpen(prev => !prev); setDeleteId(theme.id)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eraser-icon lucide-eraser"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"/><path d="m5.082 11.09 8.828 8.828"/></svg>
          </div>
          <div className='cursor-pointer' onClick={() => {setDownloadOpen(prev => !prev); setDeleteId(theme.id)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-end cursor-pointer' onClick={() => toggleOpen(theme.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </div>
  )
}

export default ThemeCard