import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEY = 'pchm-theme';

function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    // Check localStorage first
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    
    // Auto-detect based on time (after 6 PM = dark)
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
      return 'dark';
    }
  }
  return 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    
    // Update document class
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Auto-detect theme on mount and at 6 PM / 6 AM
  useEffect(() => {
    const checkTime = () => {
      const saved = localStorage.getItem(THEME_KEY);
      // Only auto-switch if user hasn't manually set preference recently
      if (!saved) {
        const hour = new Date().getHours();
        const shouldBeDark = hour >= 18 || hour < 6;
        setThemeState(shouldBeDark ? 'dark' : 'light');
      }
    };

    // Check every minute for theme changes
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
