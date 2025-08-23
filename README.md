# 🎨 Colorful Themes

A modern, intuitive color theme manager and generator built with Next.js and React. Create, manage, and export beautiful color schemes for your web applications with ease.

![Colorful Themes Banner](public/ctm_bg.png)

## ✨ Features

### 🎯 Theme Management
- **Create Custom Themes**: Build your own color schemes with comprehensive color palettes
- **Theme Wizard**: Intelligent theme generator that creates harmonious color schemes from just foreground and background colors
- **Live Preview**: Real-time preview of your themes with sample UI components
- **Import/Export**: Share themes via JSON format or export as CSS variables/Tailwind themes

### 🎨 Color Tools
- **Smart Color Generation**: Automatically generates complementary colors based on your base colors
- **Contrast Ratio Calculator**: Built-in accessibility checker to ensure proper color contrast
- **Color Harmony**: Advanced HSL-based color generation for visually pleasing palettes
- **Multiple Export Formats**: CSS Variables, Tailwind CSS theme, or JSON

### 🖥️ User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Intuitive Editor**: Easy-to-use color picker interface
- **Theme Cards**: Visual representation of your saved themes
- **Color Circles**: Organized color group visualization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MettaBlender/colorful-themes.git
cd colorful-themes
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📖 Usage

### Creating a New Theme

1. **Manual Creation**:
   - Navigate to the theme manager
   - Enter a theme name
   - Customize each color property using the color pickers
   - Save your theme

2. **Theme Wizard**:
   - Click "Theme Wizard"
   - Choose a foreground and background color
   - Let the wizard generate a complete, harmonious color scheme
   - Save the generated theme

### Exporting Themes

Export your themes in multiple formats:

- **CSS Variables**: Ready-to-use CSS custom properties
- **Tailwind Theme**: Tailwind CSS configuration format
- **JSON**: Portable format for sharing or importing

### Using Themes in Your Project

### 🎨 All Theme Variables

Below are all the variables you can use in your themes. Each variable is available as a CSS custom property and as a Tailwind theme variable.

### CSS Variables
```
:root {
  --foreground: #000000;
  --foreground-secondary: #6B7280;
  --foreground-tertiary: #9CA3AF;
  --background: #ffffff;
  --background-secondary: #F3F4F6;
  --background-tertiary: #E5E7EB;
  --button-background: #00C4FF;
  --button-hover: #FF4E88;
  --button-text: #ffffff;
  --link-color: #00C4FF;
  --link-clicked-color: #FF4E88;
  --accent-primary: #00C4FF;
  --accent-secondary: #FF99BB;
  --accent-tertiary: #FF4E88;
  --accent-quaternary: #66E0FF;
  --focus-ring: #FF4E88;
  --hover: #FF4E88;
  --error: #EF4444;
  --warning: #F59E0B;
  --success: #10B981;
  --border-primary: #D1D5DB;
  --border-secondary: #E5E7EB;
}
```

### Tailwind Theme Variables
```
@theme {
  --color-foreground: #000000;
  --color-foreground-secondary: #6B7280;
  --color-foreground-tertiary: #9CA3AF;
  --color-background: #ffffff;
  --color-background-secondary: #F3F4F6;
  --color-background-tertiary: #E5E7EB;
  --color-button-background: #00C4FF;
  --color-button-hover: #FF4E88;
  --color-button-text: #ffffff;
  --color-link: #00C4FF;
  --color-link-clicked: #FF4E88;
  --color-accent-primary: #00C4FF;
  --color-accent-secondary: #FF99BB;
  --color-accent-tertiary: #FF4E88;
  --color-accent-quaternary: #66E0FF;
  --color-focus-ring: #FF4E88;
  --color-hover: #FF4E88;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
  --color-success: #10B981;
  --color-border-primary: #D1D5DB;
  --color-border-secondary: #E5E7EB;
}
```

#### Variable Mapping Table

| Theme Key           | CSS Variable                | Tailwind Variable              |
|---------------------|----------------------------|-------------------------------|
| foreground          | --foreground               | --color-foreground            |
| foregroundSecondary | --foreground-secondary     | --color-foreground-secondary  |
| foregroundTertiary  | --foreground-tertiary      | --color-foreground-tertiary   |
| background          | --background               | --color-background            |
| backgroundSecondary | --background-secondary     | --color-background-secondary  |
| backgroundTertiary  | --background-tertiary      | --color-background-tertiary   |
| buttonBackground    | --button-background        | --color-button-background     |
| buttonHover         | --button-hover             | --color-button-hover          |
| buttonText          | --button-text              | --color-button-text           |
| linkColor           | --link-color               | --color-link                  |
| linkClickedColor    | --link-clicked-color       | --color-link-clicked          |
| accentPrimary       | --accent-primary           | --color-accent-primary        |
| accentSecondary     | --accent-secondary         | --color-accent-secondary      |
| accentTertiary      | --accent-tertiary          | --color-accent-tertiary       |
| accentQuaternary    | --accent-quaternary        | --color-accent-quaternary     |
| focusRing           | --focus-ring               | --color-focus-ring            |
| hover               | --hover                    | --color-hover                 |
| error               | --error                    | --color-error                 |
| warning             | --warning                  | --color-warning               |
| success             | --success                  | --color-success               |
| borderPrimary       | --border-primary           | --color-border-primary        |
| borderSecondary     | --border-secondary         | --color-border-secondary      |


## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Development**: ESLint, PostCSS
- **Build Tool**: Turbopack (for development)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js                    # Homepage with color palette preview
│   └── colorful-themes/
│       ├── page.js                # Main theme manager
│       └── docs/
│           └── page.js            # Documentation
├── components/
│   ├── colorCircle.jsx            # Color group visualization
│   ├── colorInput.jsx             # Color picker input
│   ├── themeCard.jsx              # Theme display card
│   ├── themeSwitcher.jsx          # Theme selection component
│   └── wizardFunctions.jsx        # Color generation algorithms
└── lib/                           # Utility functions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Documentation](./src/app/colorful-themes/docs/page.js)
- [Live Demo](http://localhost:3000/colorful-themes) (when running locally)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Color theory and contrast calculations based on WCAG guidelines

---

Made with ❤️ for the developer community
