import React from 'react'

const ColorInput = ({ label, value, onChange }) => {
  return (
    <div className='flex items-center justify-between w-full md:w-[30dvw] gap-3'>
      <label className='text-xl font-bold'>{label}</label>
      <input type="color" name={label} value={value} onChange={onChange} className='h-8 w-16 focus:ring-2 focus:ring-[#FF4E88]'/>
    </div>
  )
}

export default ColorInput