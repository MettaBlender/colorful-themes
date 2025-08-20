// Funktion zum Konvertieren eines Hex-Codes in RGB
export function hexToRgb(hex) {
  // Entferne # und konvertiere Kurzform (z. B. #FFF) in Langform
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('');
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return { r, g, b };
}

// Funktion zur Berechnung der relativen Luminanz
export function getLuminance({ r, g, b }) {
  // Linearisiere RGB-Werte (0–1)
  const linearize = (value) => {
    value = value / 255;
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
  };
  const R = linearize(r);
  const G = linearize(g);
  const B = linearize(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

// Funktion zur Berechnung des Kontrastverhältnisses
export default function getContrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const luminance1 = getLuminance(rgb1);
  const luminance2 = getLuminance(rgb2);
  const brighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  return (brighter + 0.05) / (darker + 0.05);
}

// Konvertiert RGB in HSL
export function rgbToHsl(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // Achromatisch
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360), // Hue in Grad (0-360)
    s: Math.round(s * 100), // Sättigung in Prozent (0-100)
    l: Math.round(l * 100), // Helligkeit in Prozent (0-100)
  };
}

// Konvertiert Hex in HSL
export function hexToHsl(hex) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHsl(r, g, b);
}

// Konvertiert HSL in RGB
export function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // Achromatisch
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

// Konvertiert HSL in Hex
export function hslToHex(h, s, l) {
  const { r, g, b } = hslToRgb(h, s, l);
  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function getWizardColors(foreground, background) {
  let colors = {
    foreground: foreground,
    foregroundSecondary: "#6B7280",
    foregroundTertiary: "#9CA3AF",
    background: background,
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
  };

  colors.foregroundSecondary = hslToHex(hexToHsl(colors.foreground).h, hexToHsl(colors.foreground).s, hexToHsl(colors.foreground).l + 10);
  colors.foregroundTertiary = hslToHex(hexToHsl(colors.foreground).h, hexToHsl(colors.foreground).s, hexToHsl(colors.foreground).l + 20);


  console.log("Generated colors:", colors);

  return colors;
}