/* ==========================================================================
   Theme Utilities
   ========================================================================== */

const STORAGE_KEY = "theme";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme = typeof THEMES[keyof typeof THEMES];

/* ==========================================================================
   Helpers
   ========================================================================== */

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
}

function persistTheme(theme: Theme): void {
  localStorage.setItem(STORAGE_KEY, theme);
}

/* ==========================================================================
   Public API
   ========================================================================== */

export function getTheme(): Theme {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  return savedTheme === THEMES.LIGHT
    ? THEMES.LIGHT
    : THEMES.DARK;
}

export function setTheme(theme: Theme): void {
  applyTheme(theme);
  persistTheme(theme);
}

export function initializeTheme(): void {
  applyTheme(getTheme());
}

export function toggleTheme(): Theme {
  const nextTheme =
    getTheme() === THEMES.DARK
      ? THEMES.LIGHT
      : THEMES.DARK;

  setTheme(nextTheme);

  return nextTheme;
}

export function isDarkTheme(): boolean {
  return getTheme() === THEMES.DARK;
}

export function isLightTheme(): boolean {
  return getTheme() === THEMES.LIGHT;
}