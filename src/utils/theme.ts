export type Theme = 'light' | 'dark' | 'system';

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

export function getStoredTheme(): Theme {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('theme') as Theme;
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      return stored;
    }
  }
  return 'dark';
}

export function setStoredTheme(theme: Theme): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
}

export function getEffectiveTheme(theme: Theme): 'light' | 'dark' {
  return theme === 'system' ? getSystemTheme() : theme;
}

export function applyTheme(theme: Theme): void {
  const effectiveTheme = getEffectiveTheme(theme);
  const html = document.documentElement;
  
  if (effectiveTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}

export function initializeTheme(): void {
  const theme = getStoredTheme();
  applyTheme(theme);
  
  // Listen for system theme changes
  if (typeof window !== 'undefined' && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const currentTheme = getStoredTheme();
      if (currentTheme === 'system') {
        applyTheme('system');
      }
    });
  }
}