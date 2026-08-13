import { useState, useEffect } from 'react';

export function useTheme(defaultDark = true) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem('saiganesh-theme');
      if (stored !== null) return stored === 'dark';
    } catch {
      // Ignore storage failures and fall back to default.
    }
    return defaultDark;
  });

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
    }
    try {
      localStorage.setItem('saiganesh-theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage failures in restricted environments.
    }
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, toggle };
}
