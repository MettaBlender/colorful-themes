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

#### CSS Variables
```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --background-secondary: #f3f4f6;
  /* ... other variables */
}
```

#### Tailwind CSS
```css
@theme {
  --color-background: #ffffff;
  --color-foreground: #000000;
  --color-background-secondary: #f3f4f6;
  /* ... other variables */
}
```

## 🎨 Available Color Variables

### Standard Variables
- `background`, `background-secondary`, `background-tertiary`
- `foreground`, `foreground-secondary`, `foreground-tertiary`
- `button-background`, `button-hover`, `button-text`
- `link-color`, `link-clicked-color`
- `accent-primary`, `accent-secondary`, `accent-tertiary`, `accent-quaternary`
- `error`, `warning`, `success`
- `border-primary`, `border-secondary`
- `focus-ring`, `hover`

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
