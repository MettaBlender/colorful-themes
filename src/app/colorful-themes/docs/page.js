import React from 'react'

const page = () => {
  return (
    <div className='w-full md:w-[50%] mx-auto'>
      <h1 className='w-full text-center text-4xl font-bold mt-3'>Colorful Themes Docs</h1>
      <div className='h-8'/>
      <p>
        Colorful Themes is a modern React component library that provides beautiful,
        customizable color schemes and theming solutions for web applications.
        This library offers a collection of pre-built themes, color palettes,
        and utility components to help developers create visually appealing
        and consistent user interfaces with minimal effort.
      </p>
      <div className='h-8'/>
      <p>
        You can use the following variables in your CSS:
      </p>
      <pre>
{`--background
--foreground
--background-secondary
--foreground-secondary
--background-tertiary
--foreground-tertiary
--button-background
--button-hover
--button-text
--link-color
--link-clicked
--hover
--error
--warning
--success
--border
--border-secondary
--accent
--accent-secondary
--accent-tertiary
--accent-quaternary
--focus-ring
`}
      </pre>
      <div className='h-8'/>
      <p>
        You can use the following variables in Tailwind:
      </p>
      <pre>
{`--color-background
--color-foreground
--color-background-secondary
--color-foreground-secondary
--color-background-tertiary
--color-foreground-tertiary
--color-button-background
--color-button-hover
--color-button-text
--color-link
--color-link-clicked
--color-hover
--color-error
--color-warning
--color-success
--color-border
--color-border-secondary
--color-accent
--color-accent-secondary
--color-accent-tertiary
--color-accent-quaternary
--color-focus-ring
`}
      </pre>
      <div className='h-8'/>
      <p>
        These are the variables that can be assigned in the Colorful Themes manager.
      </p>
      <p>
        If you create a theme, you can export it as CSS variables, Tailwind theme, or as JSON. The exported theme can be used in your own project. The JSON file can be imported back into Colorful Themes.
      </p>
      <div className='h-8'/>
    </div>
  )
}

export default page